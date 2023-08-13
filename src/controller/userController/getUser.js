
const getUserFc = async (User, req, res) => {
    try {
        const { email, password } = req.body; // Assuming email and password are sent in the request body

        // Basic validation
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required.' });
        }

        // Retrieve user from MongoDB based on email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        // Validate password (you might want to use a proper authentication library)
        if (user.password !== password) {
            return res.status(401).json({ error: 'Incorrect password.' });
        }

        // If all checks pass, respond with the user object
        return res.status(200).json(user);
    } catch (error) {
        console.error('Error while getting user:', error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
}
module.exports = getUserFc; 