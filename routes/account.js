var express = require('express');
var router = express.Router();
var profileController = require('../controllers/ProfileController');
var bcrypt = require('bcryptjs')

router.get('/:action', function(req, res, next){
	var action = req.params.action

	if (action == 'logout'){
		req.session.reset()
		res.json({
			confirmation: 'Success',
			message: 'Logged out. Goodbye!'
		})
	}

	if (action == 'currentuser'){
		if (req.session == null){
			res.json({
				confirmation: 'Success',
				message: 'No Current User: No session in place.'
			})

		return

		}

		if (req.session.user == null){
			res.json({
				confirmation: 'Success',
				message: 'No Current User: No user in current session.'
			})

		return

		}

		var userId = req.session.user
		profileController.getById(userId, false, function(err, result){

			if (err){
				res.json({
					confirmation: 'Fail',
					message: 'Cannot Find Current User'+ err.message
				})
			return
			}

			res.json({
				confirmation: 'Success',
				currentUser: result
			})
			return
		})
	}
})


router.post('/:action', function(req, res, next){
	var action = req.params.action

	if (action == 'login'){
		var credentials = req.body
		var email = credentials.email.toLowerCase()

		profileController.get({email: email}, true, function(err, results){

			var profile = results[0]
			var passwordCorrect = bcrypt.compareSync(credentials.password, profile.password)

			if (passwordCorrect == false){
				res.json({
					confirmation: 'Fail',
					message: 'Incorrect Password'
				})
				return
			}

			var profileSummary = profile.summary()
			req.session.user = profileSummary.id

			res.json({
				confirmation: 'Success',
				currentUser: profileSummary
			})

			return

		})
	}
})

module.exports = router