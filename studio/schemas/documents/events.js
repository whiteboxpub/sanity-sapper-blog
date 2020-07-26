export default {
  name: 'events',
  type: 'document',
  title: 'Events',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Event Name',
    },
    {
      name: 'start_date',
      type: 'datetime',
      title: 'Start Date',
    },
    {
      name: 'end_data',
      type: 'datetime',
      title: 'End Date',
    },
    {
      name: 'location',
      type: 'string',
      title: 'City, State Abbr.',
    },
    {
      name: 'description',
      type: 'excerptPortableText',
      title: 'Details',
    },
  ],
  preview: {
    select: {
      title: 'title',
      start_date: 'start_date',
      end_date: 'end_date',
      location: 'location',
    },
    prepare ({title = 'No name', start_date, end_date, location = "Location missing" }) {
      const startFormat = start_date ? new Date(start_date).toLocaleString(undefined, {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        dayPeriod: "short",
      }) : "-/-/-";
      const endFormat = end_date ? new Date(end_date).toLocaleString(undefined, {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        dayPeriod: "short",
      }) : "-/-/-";
      const dateSegment = end_date ? `${startFormat} ${endFormat}` : startFormat;
      const eventName = `${title} – ${location}`;
      return {
        title: eventName,
        subtitle: dateSegment
      }
    }
  }
}
