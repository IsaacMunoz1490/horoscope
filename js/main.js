var zodiac = [
{
	sign: "aquarius",
	fortune: "Your friends may tempt you to act irresponsibly today, but irrational behavior isn't your friend. ",
	image: "img/aquarius.jpg"
},
{	sign: "aries",
	fortune: "Communication grows more significant now and the best way to deal with the extra pressure is to manage your time wisely.",
	image: "img/aries.jpg"
},
{
	sign: "taurus",
	fortune: "Your self-confidence is on the rise and your enthusiasm is contagious",
	image: "img/taurus.jpg"
},
{
	sign: "gemini",
	fortune: "You can be disarmingly charming and even an outrageous flirt when the mood strikes you.",
	image: "img/gemini/jpg"
},
{
	sign: "libra",
	fortune: "You're painting a very rosy picture about your personal life while the Moon plays in your 5th House of Love and Children.",
	image: "img/libra.jpg"
},
{
	sign: "scorpio",
	fortune:"When you get close to someone you love, you yearn to merge your worlds without restraint.",
	image: "img/scorpio.jpg"
},
{
	sign: "sagittarius",
	fortune: "The focus is shifting from desiring complex emotional entanglements to needing simplicity.",
	image: "img/sagittarius.jpg"
},
{
	sign: "cancer",
	fortune: "You like to rely on the absolute certainty of emotional support, and sometimes find yourself nostalgically craving the security you lost somewhere along the way. ",
	image: "img/cancer.jpg"
},
{
	sign: "capricorn",
	fortune: "You are uncharacteristically ready to let go of ambitions that don't inspire your soul, but you're not quite prepared to take the next step yet.",
	image: "img/capricorn.jpg"
},
{
	sign: "leo",
	fortune: "Love can come knocking at your door now, yet it could be unrecognizable if you are too rigid in your expectations",
	image: "img/leo.jpg"
},
{
	sign: "virgo",
	fortune: "Might suddenly feel a resurgence of your desire for success at work.",
	image: "img/virgo.jpg"
},
{
	sign: "pisces",
	fortune: "You can't help but be frustrated if familial duties require you to readjust your schedule today, for this requirement can remind you of a previous time when you were not in control.",
	image: "img/pisces.jpg"
}

]



function horoscope() {
	console.log("functionFire")
	var sign = document.getElementById("sign").value.toLowerCase()
	console.log(sign)
	for(i = 0; i < zodiac.length; i++) {
		if(sign === zodiac[i].sign) {
			document.getElementById("yourSign").innerHTML = zodiac[i].sign
			document.getElementById("icon").src = zodiac[i].image
			document.getElementById("yourHoroscope").innerHTML = " " + zodiac[i].fortune
			return
		} else {
			document.getElementById("yourSign").innerHTML = "That's not one of the signs. Try again!"
			document.getElementById("sign").innerHTML = ""
			document.getElementById("icon").src = ""
		}
	}
}