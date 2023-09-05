/**
 * Gets an AI response for a prompt.
 * @param {String} input - The prompt for the AI.
 * @return {String} answer - The answer for the prompt
 * @customfunction
*/
function ASKAI(input) {
  var apiKey = "[PUT YOUR API KEY HERE]";
  var apiUrl = "https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText"; 

  var url = apiUrl + "?key=" + apiKey;
  var headers = {
    "Content-Type": "application/json"
  };
  var requestBody = {
    "prompt": {
     "text": input ?? "Tell me a story about the sunset."
   }
  };

  var options = {
    "method": "POST",
    "headers": headers,
    "payload": JSON.stringify(requestBody),
    "muteHttpExceptions": true
  };

  var response = UrlFetchApp.fetch(url, options);
  var answer = JSON.parse(response.getContentText());
  var text = answer.candidates[0].output

  Logger.log(text); 
  return text
}
