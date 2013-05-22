app.all('/', function(req, res) {
    res.redirect('/index.html');
});

app.get('/:page.html', function(req, res) {
    res.render(req.params.page+'.ejs');
});
//
//app.get('/input.html', function(req, res) {
//    res.render('input.ejs');
//});
//
//app.get('/photo.html', function(req, res) {
//    res.render('photo.ejs');
//});
//
//app.get('/api.html', function(req, res) {
//    res.render('api.ejs');
//});