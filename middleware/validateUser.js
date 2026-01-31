export const validateuser = (req, res, next) => {
  const { name, email, role } = req.body;

  if (!name || !email || !role) {
    return res.status(400).json({
      error: 'Name, email, and role are required'
    });
  }

  const validRoles = ['admin', 'seller', 'customer'];
  if (!validRoles.includes(role)) {
    return res.status(400).json({
      error: 'Role must be admin, seller, or customer'
    });
  }

  next();
};
