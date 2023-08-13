const deleteUserfc = async(User, req, res) => {
    try {
        const { email } = req.body; // Assuming the email is provided in the request body

        // Find and delete the user by email
        const deletedUser = await User.findOneAndDelete({ email });

        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found.' });
        }

        // Respond with a user deleted message
        return res.status(200).json({ message: 'User deleted successfully.' });
    } catch (error) {
        console.error('Error while deleting user:', error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }

}
module.exports = deleteUserfc; 