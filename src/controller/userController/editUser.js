const editUserfc = async (User, req, res) => {
    try {
        const { email } = req.body; // Assuming the email is provided as a URL parameter
        const updates = req.body; // Assuming the updated user data is sent in the request body

        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        // Update the user's data
        Object.assign(user, updates);
        await user.save();

        // Respond with the edited user
        return res.status(200).json(user);
    } catch (error) {
        console.error('Error while editing user:', error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
}

module.exports = editUserfc; 