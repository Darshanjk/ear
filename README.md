# Otitis Media Detection Using Transfer Learning

Otitis Media Detection using Transfer Learning is a deep learning technique that uses pre-trained models to quickly and accurately diagnose middle ear infections. The method involves fine-tuning pre-trained models on images of the middle ear to detect signs of Otitis Media. This approach can significantly reduce the time and error associated with manual inspections and improve the accuracy of diagnosis, making it a valuable tool for medical professionals.

ResearchGate Technical Report: https://www.researchgate.net/publication/375893659_Otitis_Media_Detection_Using_Deep_Learning
## Run Locally

Clone the project

```bash
  git clone https://github.com/bhimrazy/Otitis-Media-Detection-Using-Deep-Transfer-Learning
```

### For frontend

```bash
# Go to the project directory
$ cd frontend

# Install dependencies
$ npm install

# copy env file
cp .env.example .env.local

# Start the server
$ npm run dev
```

### For Backend

```bash
# Go to the project directory
$ cd backend

# create env
$ python -m venv venv
$ source venv/bin/activate

# Install dependencies
$ pip install -r requirements.txt

# copy env file
cp .env.example .env

# Start the server
$ python manage.py serve
```

## Deployment

To deploy this project merge your changes to the main branch.

#### Deployed URLS:

- Frontend : https://otitis-media-detection.vercel.app
- Backend : https://ear-care-iq.up.railway.app

#### Preview

![image](https://user-images.githubusercontent.com/46085301/218257473-9f37c7ed-6b37-4a5a-9f53-9ce41173941d.png)

#### System Architecture

![image](https://user-images.githubusercontent.com/46085301/218257587-82b1a5e6-d750-4c83-bfc8-7cc667c465b3.png)

#### Some Examples

![image](https://user-images.githubusercontent.com/46085301/218257618-ed84b01e-c34f-4c04-a0a7-9360e46f68b2.png)

## Tech Stack

**Client:** NextJs, TailwindCSS

**Server:** Python, FastAPI, PyTorch, ONNX

## Authors

- [Bhimraj Yadav](https://www.github.com/bhimrazy)
