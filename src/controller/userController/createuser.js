const createUserfc = async (User, req, res) => {
    try {
        const { email, password, firstname, lastname, address, favorites } = req.body; // Assuming email, password, and name are sent in the request body

        // Basic validation
        if (!email || !password || !firstname || !lastname || !address || !favorites) {
            return res.status(400).json({ error: 'Email, password, and name are required.' });
        }

        // Check if user with the same email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ error: 'User with this email already exists.' });
        }

        // Create a new user instance
        const newUser = new User({
            email,
            password, // Remember to properly hash the password before saving
            lastname,
            firstname,
            address, 
            favorites
        });

        // Save the user to the database
        await newUser.save();

        // Respond with the user object
        return res.status(201).json(newUser);
    } catch (error) {
        console.error('Error while creating user:', error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
}

module.exports = createUserfc; 