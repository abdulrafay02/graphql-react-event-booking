const Booking = require("../../models/booking");
const Event = require("../../models/event");
const { transformBooking, transformEvent } = require("./merge");

module.exports = {
  bookings: async (args, req) => {
    try {
      if (!req.isAuth) {
        throw new Error("Unauthenticated!");
      }

      const bookings = await Booking.find({ user: req.userId });
      return bookings.map(transformBooking);
    } catch (err) {
      throw err;
    }
  },
  bookEvent: async (args, req) => {
    try {
      if (!req.isAuth) throw new Error("Unauthenticated!");

      const fetchedEvent = await Event.findOne({ _id: args.eventId });
      if (!fetchedEvent) throw new Error("Event not found!");

      const booking = new Booking({
        user: req.userId,
        event: args.eventId,
      });
      const res = await booking.save();
      return transformBooking(res);
    } catch (err) {
      throw err;
    }
  },
  cancelBooking: async (args, req) => {
    try {
      if (!req.isAuth) {
        throw new Error("Unauthenticated!");
      }

      const booking = await Booking.findById(args.bookingId).populate("event");
      const event = transformEvent(booking.event);
      await Booking.deleteOne({ _id: args.bookingId });
      return event;
    } catch (err) {
      throw err;
    }
  },
};
