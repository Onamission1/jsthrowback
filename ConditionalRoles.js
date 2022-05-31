//it chages the user roles like admin, subadmin, testprep, and user (end consumers)
//PS: Without the break; all the roles will be fall "true" more like a default, you can try to see it by commenting out the break

var user = "admin";
switch (user) {
    case "admin":
        console.log("Admin gets the full access");
        break;

    case "subadmin":
        console.log("the subadmin gets the full access to create and delete courses only");
        break;

    case "testprep":
        console.log("testprep gets the access to create and delete test");
        break;

    case "user":
        console.log("users get the access to consume the content");
        break;

    default:
        console.log("You are on trial");
        break;
}