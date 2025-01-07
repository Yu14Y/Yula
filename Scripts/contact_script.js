document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const discordUid = document.getElementById('discordUid').value;
    const text = document.getElementById('text').value;
    // Note, I plan to add my webhook url in an env variable in the future, For now if you spam my webhook, well theres nothing i can do about it.//
    // Also i made a bot that will auto delete any message containing @everyone and any message that is not formatted the way it is, if user sends 2 or more of the same message, bot will auto delete. I don't plan to open source this bot anytime soon as people might find ways to abuse it. //
    const webhookURL = "https://canary.discord.com/api/webhooks/1326020075391811644/47SzdcZzU6A4i_HQLGZRjl4N73KvoazeyIeS1jjaunchAkoef3OXs94MlNssFD3_KkOE"

    const message = {
        content: `**Email:** ${email}\n**Name:** ${name}\n**Discord UID:** ${discordUid}\n**Subject:** ${subject}\n**Message:** ${text} \n ========`
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset(); 
        } else {
            alert('Error sending message.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending message.');
    });
});
