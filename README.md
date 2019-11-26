# Mars Mission Registration Form - Part 1

You are creating a form for people to register to be astronauts on a mission to Mars. You'll have to collect a lot of information, as a mission to Mars can be grueling, uncomfortable, and long.

Therefore, it's important to ask a number of questions! However, today, we're going to ask some pretty basic ones. Note that **as we learn more about building forms, we'll add more inputs to our form** - so build this with a plan to expand!

Our form is going to consist of single component, called `form.js`. You might have noticed that, so far, our interactive items that we've kept track of in state have had (at least) three elements:

- Their part(s) of state.
- Their function that handles receiving user inputs and updating the state.
- Their JSX element(s) that allow the user to interact/input information.

Our app will be no different! It's your task to create parts of state, handler functions, and JSX input elements for all of our questions.

## Step 1: Create a Form

_Note: You are welcome to develop this in Codesandbox, but please submit a React project built on your GitHub! In other words, it has to have a local version, too._

Create a component called `form.js` and import it into your `index.js` file. Place it into your `ReactDOM.render` function and have it
render something small, like an `h1` tag that says "Mission to Mars Registration Form."

Once that's working, add a `div` tag. This `div` will contain our form.

## Step 2: Create Inputs

Inside that `div` tag, we're going to be rendering several `input` and `select` tags, including:

- What is your name? (`text`).
- What is your date of birth?
  - You have two options here:
    - Three `select`s, for month, day, and year (starting at 1900 to the present) - how are you going to store this result in state?).
    - The [date](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date) input.
- What is your country of origin? (one `select` - utilize this [JSON list of countries](https://gist.github.com/keeguon/2310008) to generate the options).
- What is your dietary preference? (one `select`, with three options: `omnivore`, `vegetarian`, and `vegan`).
- Why do you want to be a Mars explorer? (`text` - Use CSS to make this input larger, to imply a more lengthy response!).

Finally, create a button that says "submit." This button should update a part of state that demonstrates that the user has completed the form - something along the lines of `formCompleted`.

## Step 3: Verify Inputs

Now that your form has several questions, we'd like to check to see if the user means to submit their form information.

Create several elements that are hidden by default, but shown when `formCompleted` becomes `true`. Don't do this with CSS - do it in the logic of your `render` function. These elements should be:

- A list of the user's responses in `p` tags.
- Another `p` tag that asks the user if they're sure the information is correct.
- A button to submit, with the text "Confirm."

This button should control another part of state - let's call it `formSubmitted`. If `formSubmitted` is `true`, then **all** content is removed from the page except for a single `p` tag with the text: "Thank you for your application."

## Step 4: Styling!

Using a Mars theme (red and orange), and inspired by the [Google Forms](https://www.google.com/search?q=google+forms&rlz=1C5CHFA_enUS748US752&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjk2ePhxdrfAhWxUt8KHRU0ArYQ_AUIDygC&biw=1379&bih=759) design language, style this page to your liking.

This [resource](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Styling_HTML_forms) from MDN will be SUPER useful if you'd like to style any input elements.


# Mars Mission Registration Form - Part 2

Add a few questions to your mars registration form - again, including parts of state, functional handlers, and updating the confirmation dialogue to include the new information:

- Radio Questions:
  - Can you breathe underwater longer than 1 minute?
    - Yes
    - No
    - I don't know
  - What is your marital status?
    - Married
    - Unmarried
  - When you are in a stressful or difficult situation, how do you most frequently react?
    - Determination: I continue to confront the situation.
    - Defeat: I stop confronting the situation.
    - Anger: I become upset at the situation.
    - Resourcefulness: I seek help to confront the situation.
  - Are you claustrophobic?
    - Yes
    - No
    - I don't know
- Checkbox Questions:
  - Does your family have a history of (check all that apply):
    - Cancer
    - Heart Disease
    - Diabetes
  - Do you have any living (check all that apply):
    - Siblings?
    - Parents?
    - Grandparents?
    - _Note: If the user checks a box, a `select` should appear and ask "How many?"- how would you store this in state?_
  - Check all educational credentials you have received:
    - High school diploma or GED equivalent
    - Associate's Degree
    - Bachelor's Degree
    - Master's Degree
    - PhD
    - Other (_text input next to this one- how would you store this in state?_)

## Synthesize Functions

Based on the lecture examples, you've probably synthesized the functionality of your handler functions into generalized versions: `handleRadioChange` and `handleCheckboxChange` should handle _most_, if not all, of the questions above.

If you did not create these generalized functions, now is your opportunity. Create **four** general functions for each of the input types we've learned so far: `handleTextChange`, `handleSelect`, `handleRadioChange`, and `handleCheckboxChange`. Refactor your JSX to take advantage of these new flexible function types.


# Mars Mission Registration Form - Part 3

Refactor your Mars mission registration form to include a `form` tag with a `submit` input. Your `submit` input, by default, should be hidden, and should only be revealed when your user has completed their form (A.K.A. `formCompleted` is `true`).

Fundamentally, this is what submitting the form should look like:

- User clicks on "Confirm" button, which is not a `submit` input, but a regular old `button` tag connected to a function.
- Once the user clicks "Confirm", their form responses are shown, and the `submit` tag is revealed.
- User clicks the `submit` tag, triggering the `form`'s `onSubmit` function.

Make sure that your styling is how you want it, and then blast off from this project!
