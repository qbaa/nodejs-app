exports.home = (req, res) => {
    res.render('home');
};

exports.result = (req, res) => {
    res.render('result', {
        formMessage: req.flash('form'),
        phone: req.flash('phone'),
        message: req.flash('message')
    });
};