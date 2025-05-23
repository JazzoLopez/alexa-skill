/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Hola desde aqui';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const InfoPersonalIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getIntentName(handlerInput.requestEnvelope) === 'InfoPersonalIntent';
  },
  handle(handlerInput) {
    const pregunta = handlerInput.requestEnvelope.request.intent.slots.pregunta.value.toLowerCase() || '';
    let speechText = '';

    if (pregunta.includes('nombre')) {
      speechText = 'Mi nombre es Jazzzzzzzzzzzzzzzzzziel.';
    } else if (pregunta.includes('carrera')) {
      speechText = 'Me interesa estudiar Ingeniería en Tecnologías de la Información e Inovación Digital.';
    } else if (pregunta.includes('color')) {
      speechText = 'Mi color favorito es el Blue.';
    } else if (pregunta.includes('grupo') || pregunta.includes('cantante')) {
      speechText = 'Me encanta el pop, uno de mis grupos favoritos es Twenty One Pilots.';
    } else {
      speechText = 'Lo siento, no entendí tu pregunta. Puedes preguntarme por mi nombre, carrera, color favorito o grupo favorito.';
    }

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt('¿Quieres saber otra cosa sobre mí?')
      .getResponse();
  }
};


//
const i = {
  canHandle(handlerInput) {
    return Alexa.getIntentName(handlerInput.requestEnvelope) === 'InfoPersonalIntent';
  },
  handle(handlerInput) {
    const pregunta = handlerInput.requestEnvelope.request.intent.slots.pregunta.value.toLowerCase() || '';
    let speechText = '';

    if (pregunta.includes('nombre')) {
      speechText = 'Mi nombre es Jazzzzzzzzzzzzzzzzzziel.';
    } else if (pregunta.includes('carrera')) {
      speechText = 'Me interesa estudiar Ingeniería en Tecnologías de la Información e Inovación Digital.';
    } else if (pregunta.includes('color')) {
      speechText = 'Mi color favorito es el Blue.';
    } else if (pregunta.includes('grupo') || pregunta.includes('cantante')) {
      speechText = 'Me encanta el pop, uno de mis grupos favoritos es Twenty One Pilots.';
    } else {
      speechText = 'Lo siento, no entendí tu pregunta. Puedes preguntarme por mi nombre, carrera, color favorito o grupo favorito.';
    }

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt('¿Quieres saber otra cosa sobre mí?')
      .getResponse();
  }
};

//

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'nombre';
    },
   handle(handlerInput) {
    const d = handlerInput.requestEnvelope.request.intent.slots.nombre.value;
    let speechText = '';

    switch (d) {
      case 'cual es tu nombre':
        speechText = 'Mi nombre es Jazzzzzzzzzzzzzzzzzziel.';
        break;
      case 'que carrera deseas estudiar':
        speechText = 'Me interesa estudiar Ingeniería en Tecnologías de la Información e Inovación Digital.';
        break;
      case 'cual es tu color favorito':
        speechText = 'Mi color favorito es el Blue.';
        break;
      case 'cual es tu grupo o cantante favorito':
        speechText = 'Me encanta el pop uno de mis grupos favoritos es Twenty One Pilots.';
        break;
      default:
        speechText = 'Lo siento, no entendí tu pregunta. Puedes preguntarme por mi nombre, carrera, color favorito o grupo favorito.';
    }

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt('¿Quieres saber otra cosa sobre mí?')
      .getResponse();
  }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
console.log(`Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */

/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        InfoPersonalIntentHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        )
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();