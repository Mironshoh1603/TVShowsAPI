const mongoose = require('mongoose');
const tour = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nameni berish majburiy'],
    trim: true,
  },
  status: String,
  species: String,
  type: String,
  gender: String,
  origin: {
    name: {
      type: String,
      required: [true, 'Nameni berish majburiy'],
      trim: true,
    },
    url: String,
  },
  location: {
    name: {
      type: String,
      required: [true, 'Nameni berish majburiy'],
      trim: true,
    },
    url: String,
  },
  image: String,
  episode: [String],
  url: String,
  created: { type: Date, default: Date.now() },
});

const TourModel = mongoose.model('shows', tour);

module.exports = TourModel;
