# Whos that Pokemon?

This website uses a object detection model trained on tensorflow to identify one of five pokemon in images.

## Getting Started

Run `git clone` and `npm install` to install the app. Run `npm run` to start the webpage on localhost.

### Installing

for training a new model:

follow instructions [here](https://tensorflow-object-detection-api-tutorial.readthedocs.io/en/latest/install.html#tf-install) to install tenosrflow using verison 1.12 of tensorflow instead of 1.9.

follow [these](https://tensorflow-object-detection-api-tutorial.readthedocs.io/en/latest/training.html) inside of the Tensorflow directory to train a custom model.

once the model is trained run

tensorflowjs_converter --input_format=tf_saved_model \
 --output_node_names='Postprocessor/ExpandDims_1,Postprocessor/Slice' \
 --output_json=true
--saved_model_tags=serve \
 ./saved_model \
 ./web_model

where saved model is the train model .pb file, and web_model is the output directory for the .json file and associated weights

load the model by uploading to github and copying the address to the raw file on git hub and pasting it in the model url.

## Running the tests

paste an image url into the text if the image is displays, hit run and the app will process the image and display bounding box and label for the positive detections

## Deployment

hosted on surge [here](http://whosthatpokemon.surge.sh/)

## Built With

- [tensorflow](https://www.tensorflow.org) - Machine Learning and Neural Network Library in Python used for training
- [tensorflowjs](https://www.tensorflow.org/js/) - ML and NN library for javascript
- [surge](https://surge.sh/) - Deployment platform
- [node.js](https://nodejs.org/en/) - package manager
- [anaconda](https://www.anaconda.com/distribution/)python machine learning package manager and virtual environment manager

## Authors

- **Kyle Clabough** - _Initial work_ - [SirAirdude](https://github.com/SirAirdude)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

Pokemon is property of Nintendo, Gamefreak, and The Pokemon Company International
