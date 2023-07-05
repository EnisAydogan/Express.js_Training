# Basically Express.js Example

## This is my first project about Express.js

In this project ve create the server with using express and we use the 2 endpoint.These are;

- /aktorler

- /aktorler:id

We import the data from data.js.This data format is JSON. If the enter wrong id according to our data,return the 404 error code.If the enter correct id according to data,return 200 and these code represent the successful.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

We create dockerfile for creating image.As you can see in the docker file app expose 5000 port.

According to pipeline,jenkinsfile help us to automatically taking the build of my app.
