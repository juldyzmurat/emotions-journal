# emotions-journal
## Run Local Development Environment
Create a `.env` in the top directory containing a single key `API_URL` set to the IP and port the backend will be listening on. For example, `API_URL=http://192.168.6.2:8080`. After this, start the backend by changing to the `backend` folder and running:
```
npx nodemon app.js
```
When this is done you should see a message stating that the backend is running on port `8080`. Next, start the frontend by switching to the frontend folder and running:
```
npx expo start
```
After running this command, you should see a QR code in your console. Make sure the Expo Go app is installed on your phone and then scan this QR code to open the client on your phone.
