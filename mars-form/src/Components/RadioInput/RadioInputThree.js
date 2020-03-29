import React from "react";
const RadioInputThree = () => {
  return (
    <div>
      <p>
        When you are in a stressful or difficult situation, how do you most
        frequently react?
      </p>
      <input
        type="radio"
        {...radioObj}
        id="determined"
        name="stress"
        value="determined"
      />
      <label>Determination: I continue to confront the situation.</label>
      <input
        type="radio"
        {...radioObj}
        id="divorced"
        name="stress"
        value="defeat"
      />
      <label>Defeat: I stop confronting the situation.</label>
      <input
        type="radio"
        {...radioObj}
        id="widowed"
        name="stress"
        value="anger"
      />
      <label>Anger: I become upset at the situation.</label>
      <input
        type="radio"
        {...radioObj}
        id="single"
        name="stress"
        value="resourceful"
      />
      <label>Resourcefulness: I seek help to confront the situation.</label>
    </div>
  );
};

export default RadioInputThree;
