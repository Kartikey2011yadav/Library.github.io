$(document).ready(function()
{
    $("#issueform").submit(function(e)
    {
        e.preventDefault();
        $.ajax(
        {
            method: "post",
            url: "Issue.php",
            data: $(this).serialize(),
            datatype: "text",
            success: function(Result)
            {
                $("#response").html(Result);
            }
        });
    });
});