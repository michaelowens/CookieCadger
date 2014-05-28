importPackage(Packages.com.cookiecadger);

var description;
var sessionUri;

function processRequest(host, uri, userAgent, accept, cookies)
{
    var pageContent, usernameMatch, username;
    description = null;
    sessionUri = null;

    if ((host.indexOf('.proboards.com') !== -1 || host.indexOf('.boards.net') !== -1 || host.indexOf('.freeforums.net') !== -1) &&
        (host !== 'www.proboards.com' && host !== 'images.proboards.com' && host.indexOf('storage.proboards.com') === -1) &&
        cookies.indexOf('session_id') != -1)
    {
        pageContent = Packages.com.cookiecadger.Utils.readUrl('http://' + host, userAgent, accept, cookies);

        if (pageContent.indexOf('"username":"') != -1)
        {
            usernameMatch = pageContent.match(/"name":"(.+?)","username":"(.+?)"/i);
            username = usernameMatch[1];

            description = '<html><font size=5>Proboards: ' + host + '</font><br>' + username;
            sessionUri = '/';
        }
    }
}