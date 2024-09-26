## Steps to Start Server

1. Clone this github repo
2. ```cd``` into the project directory.
3. Create a .env file with the contents of .env.example.
4. Create a python virtual environment using ```python3/python -m venv venv```.
5. Install all dependencies using ```pip install -r requirements.txt```.
4. Use your stripe api keys.
5. The webhook endpoint is used with stripe cli. (Not needed for frontend purspose.)
6. Run```uvicorn main:app --reload``` in the terminal to run the app.

#### This will start a server in your computer. Please check the terminal for the port.

The api endpoints are available in ```{domain}/docs``` endpoint. Please go there.

## Api Endpoint More Info

```/donate``` - The frontend will send amount and currency as request body. A response of redirect url will be returned as json, 
which should be used to redirect to the checkout page.

```/subscribe```- The frontend will send price_id, the backend will redirect.
This is the only method while using stripe checkout page. 

Please refer the above code.

For dry running, create a product in the stripe dashboard with mode as subscription. 
Copy its price_id and use it here.

