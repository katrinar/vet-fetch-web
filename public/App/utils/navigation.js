
export default {

	accountPage: function(){
		window.location.href = '/account'
	},

	petsPage: function(){
		window.location.href = '/pets'
	},

	petProfilePage: function(slug){
		window.location.href = '/pet/'+slug
	}
}