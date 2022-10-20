define("CA.PdpPdf.PDPCustompdf.ServiceController", ["ServiceController"], function(
  ServiceController
) {
  "use strict";

  return ServiceController.extend({
    name: "CA.PdpPdf.PDPCustompdf.ServiceController",

    // The values in this object are the validation needed for the current service.
    options: {
      common: {}
    },

    get: function get() {
      return JSON.stringify({
        message: "Hello World I'm an Extension using a Service!"
      });
    },

    post: function post() { 
      
     //  var base64 = "JWXqiPhYxbhYHTVV0ZE6KavAkEpTqET6CYHIxZ6keD7v8A1Aj8pVC4Yml8YQSc7cYLJ8WgzXaRCgKinIkUaruEFm5vCqHKapjAYglMUpvjQMFo0tOGvVCxPli6Vir2HBWV8fR19V8WO7VkWopx0bZ1BTFUiSAlcKLN1VEwMdNJ4k3OoBR6FMPxq3Nze4WibTsAWzcjk9u/Vr1Mh1JOYJFokUceBPjsJCqHIURAB5+TB+PzoJ1o0pk/vNoGZLbiKWl6RnugMpjKjVlSXXhZxjK3CtFvV0zu0vcnWUjDJEMcU1CJLAqCAimAAI66OT/Viwfjew3JNjhfK9qqmOnDhrfcjVCmleQcI7QIB1mxjisRw4OnyAKGbIrJpDyChydTcA0WjWekh6kwPfUCxreqPXMrWasZK2xDYari2tsRcOXbpSSROVdVv7gGLdYiBhKZwssQhQHoCoiYoDKt13qzSMVsQsW4zbDhq8qWqBvbOqWOrzVeaIydWfGeN01yPEHLoiXIprFBI6aiyZjrom+4nYwA8OjUcrN+lbDiprkp7i+xxD1xDe/Up8mRr9VbqePv7M4JLnb+fn7PtWMn2/8AScfdpRdmPquurZsusm6beTjK2UwkPe5KHYeeDaqnmlBlXDRnHxzaPcuVXDkokTbGIYAEy3YSicn36B3dGqGwTv8A6LmHK6OCbvhHJOK7jIRi0lXoDJ0Ag0POM0hKCqzRZo5coKCn3IJ0RUKsQDgJkyhrvbvN52J9lNYrNty5EWJ40tdubVyMTrUQL5cHrhNU6QCiUwKHAwpCQATKc4mOUAKPIiAW3o0qMd6tOP5C2TWIR2jZ0QybENE36WK1aezGYkI1Tv0kEVCPjMSthFMxeyzpIwHEqYlA5gKMjZ+p7t0mNvFX3B1iBucue42FxXq/RY2tmPYXE03UWTdRpmonAqSyBm64KidQqSfiMIqccCIMXo0pNn9QaGzVhTN2N4/GGTcTZKpWLX84evXqNRYyCTZRs4Kg/auWLlwgqUFUhDukuJiHKHIFHjUg2sbzatMwmINuREbNdb5LYuiZq4P40E3SdfbqMkzEeSzldYgpmcKAYEyB5F1R7GAgkKc4Ay2jSq2T1dtvsHO2B7EYlyhP4/p80tE3HMcDU016vDOkFPG5KouK5XC6aCgGIss3brJJCQ/c5eo8NHGScdNRreZh3yLpo7QIs1ct1AOmsmYAMU5TB8GKICAgIfkB0H30aNGgNGjRoDRo0aA0aNGgNGjRoDRo0aA0aNGgRKzYhyw4rm/9BDF9iOe5JmCnkJCLiM7/AOSjdD/Jh0/zX7xRS/b7feAl/IcabbbPEykDtwx/Bzka4ZPWVIiUHjN2iZNVBUjNIp0zkMACUxTAICUQAQEBAdTfRoMsc1Tm";
      var text = "exampletextforpdfgeneration";
      var encodeddata = nlapiEncrypt("exampletext",'base64');
      var file = nlapiCreateFile("Encodeddata1.pdf", "PDF", encodeddata);
      console.warn("file obj", file);
      file.setFolder(2822);
      var id = nlapiSubmitFile(file);
      return {"id":id}

     /* var arrPdf = [];
      var id = this.data.id;
      var sku = this.data.sku;
      id = id.toString();
      //var sku = nlapiLookupField("item", id, "itemid");
      console.warn("sku",sku);
      var arrFinalPdf = [];
      var resultArr = [];
      var files = {};
      var filters = new Array();
      try {
        var i = 0;
        filters[i] = new nlobjSearchFilter(
          "name",
          null,
         // "haskeywords",
          "startswith",
           sku
        );
        i += 1;
        filters[i] = new nlobjSearchFilter("filetype", null, "anyof", "PDF");
        nlapiCreateSearch("file", filters, [
          new nlobjSearchColumn("name").setSort(false),
          new nlobjSearchColumn("folder"),
          new nlobjSearchColumn("documentsize"),
          new nlobjSearchColumn("url"),
          new nlobjSearchColumn("created"),
          new nlobjSearchColumn("modified"),
          new nlobjSearchColumn("filetype"),
        ])
          .runSearch()
          .getResults(0, 999)
          .forEach(function (element) {
            var pdf = {
              name: element.getValue("name"),
              url: element.getValue("url"),
            };
            resultArr.push(pdf);
          });
      } catch (error) {
        nlapiLogExecution("DEBUG", "error", error);
      }    
      files["lengthExtras"] = resultArr;
      return files; */
    },

    put: function put() {
      // not implemented
    },

    delete: function() {
      // not implemented
    }
  });
});
