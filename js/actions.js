jQuery(function() {
	setInterval(function() {
		let definer = ".claimable-bonus__icon";
		if(jQuery(definer).length) {
			console.log("Twitch Helper Click Loot " + new Date().toLocaleString());
			jQuery(definer).click();
		}
	}, 60000);
});