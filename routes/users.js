import express from 'express';
import path from 'path';
import { spawn } from "child_process";

import fishHelpModel from '../models/fishHelpModel.js';
import fisherManModel from '../models/FisherMan.js';
import dealerModel from '../models/Dealer.js';
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
	res.render(path.join(process.cwd(), 'views', 'index.ejs'));
});

router.get('/About', function (req, res) {
	res.render(path.join(process.cwd(), 'views', 'About.ejs'));
})
router.get('/Fish', function (req, res) {
	res.render(path.join(process.cwd(), 'views', 'Fish.ejs'));
})
router.get('/Help', function (req, res) {
	res.render(path.join(process.cwd(), 'views', 'Help.ejs'));
})

// Integrating ML model
router.get('/fishType', (req,res)=>{
	res.render(path.join(process.cwd(), 'views', 'fishType.ejs'), { predictedValue: "NONE" });
})

router.post('/predict', (req, res) => {
    var dataToSend;

    // spawn new child process to call the python script
    const intFeatures = Object.values(req.body);
    
	const python = spawn('python', ['app.py', JSON.stringify(intFeatures)]);
    
	// collect data from script
    python.stdout.on('data', function (data) {
        // console.log('Pipe data from python script ...');
        dataToSend = data.toString();
    });
    
	// in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
        // console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        res.render(path.join(process.cwd(), 'views', 'fishType.ejs'), { predictedValue: dataToSend });
    });
})

// ML model integrated

router.post('/Help', async (req, res) => {
	try {
		const HelpDoc = new fishHelpModel({
			Firstname: req.body.Firstname,
			Lastname: req.body.Lastname,
			Call: req.body.Number,
			Email: req.body.Email,
			Message: req.body.message
		})
		await HelpDoc.save();
		res.render(path.join(process.cwd(), 'views', '/accepted.ejs'));
	} catch (error) {
		res.redirect('/Help');
	}
})

router.post('/Register', async (req, res) => {
	if (req.body.profession == "0") {
		try {
			const createUser = new fisherManModel({
				name: req.body.Name,
				call: req.body.Phone,
				userName: req.body.USERname,
				email: req.body.Email,
				password: req.body.password
			})
			await createUser.save();
			res.redirect('/')
		} catch (error) {
			res.redirect('/')
		}
	}
	else {
		try {
			const createUser = new dealerModel({
				name: req.body.Name,
				call: req.body.Phone,
				userName: req.body.USERname,
				email: req.body.Email,
				password: req.body.password
			})
			await createUser.save();
			res.redirect('/')
		} catch (error) {
			res.redirect('/');
		}
	}
})

router.post('/Login', async (req, res) => {
	if (req.body.profession == "0") {
		try {
			const UserId = await fisherManModel.findOne({ userName: req.body.username });
			if (UserId.password != req.body.password)
				res.redirect("/");
			else
				res.render('FarmerDashBoard', { data: UserId });
		} catch (error) {
			res.redirect('/');
		}
	}
	else {
		try {
			const UserId = await dealerModel.findOne({ userName: req.body.username });
			if (UserId.password != req.body.password)
				res.redirect("/");
			else
			{
				const farmers = await fisherManModel.find().select('name call email fishes');
				res.render('DealerDashBoard', { data: UserId, farmerData : farmers });
			}
		} catch (error) {
			res.redirect('/');
		}
	}
	// res.send('Checking');
})

router.post('/:id', async (req, res) => {
	let farmer = await fisherManModel.findById(req.params.id);

	let idx = farmer.fishes.findIndex((fish) => fish.name == req.body.name);
	if (idx == -1 || farmer.fishes[idx].name != req.body.name) {
		const result = {
			name: req.body.name,
			other: req.body.other,
			price: req.body.price
		}
		let arr = farmer.fishes;
		arr.push(result);
		await fisherManModel.findByIdAndUpdate(req.params.id, { fishes: arr });
	}
	res.render('FarmerDashBoard.ejs', { data: farmer });
})

router.post('/:id/delete/:idx', async (req, res) => {
	try {
		let farmer = await fisherManModel.findById(req.params.id);
		let arr = farmer.fishes;
		arr.splice(req.params.idx, 1);
		await fisherManModel.findByIdAndUpdate(req.params.id, { fishes: arr });

		res.render('FarmerDashBoard.ejs', { data: farmer });

	} catch (error) {
		res.redirect("/")
	}
})

// router.get('/:id/edit/:idx', async (req, res) => {
// 	let farmer = await fisherManModel.findById(req.params.id);
// 	const result = {
// 		name: req.body.name,
// 		other: req.body.other,
// 		price: req.body.price
// 	}
// 	let arr = farmer.fishes;
// 	arr.splice(req.params.idx, result, 1);
// 	await fisherManModel.findByIdAndUpdate(req.params.id, { fishes: arr });

// 	res.render('FarmerDashBoard.ejs', { data: farmer });
// })
export default router;