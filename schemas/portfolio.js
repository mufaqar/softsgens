export default {
  name: "portfolio",
  type: "document",
  title: "Portfolio",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: (doc, context) => context.parent.title,
      },
    },
    {
      name: "shortinfo",
      type: "text",
      title: "Short Info",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative text",
              description: `Some of your visitors cannot see images, 
            be they blind, color-blind, low-sighted; 
            alternative text is of great help for those 
            people that can rely on it to have a good idea of 
            what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: "link",
      type: "string",
      title: "Link",
    },
    {
      title: "Services",
      name: "services",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Feature Image",
      name: "featureimage",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      title: "Mobile View Image",
      name: "mobile_view_image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },

    {
      name: "gallery",
      type: "array",
      title: "Gallery",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
  ],
};
