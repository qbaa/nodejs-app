exports.store = (req, res) => {
    req.flash('form', 'Witaj '+req.body.name);
    req.flash('phone', 'Telefon: '+req.body.phone);
    req.flash('message', 'Wiadomość: '+req.body.message);
    res.redirect('/result');
};