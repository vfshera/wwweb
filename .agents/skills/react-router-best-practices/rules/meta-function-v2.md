---
title: Meta Function V2
impact: MEDIUM
tags: [seo, meta, routes]
---

# Meta Function V2

Use meta function with loader data for dynamic SEO and OpenGraph tags.

## Why

- Dynamic titles and descriptions based on page content
- Proper OpenGraph tags for social sharing
- Type-safe access to loader data
- Centralized SEO logic in loader or meta function

## Basic Pattern

```tsx
import { data } from "react-router";

export async function loader({ params }: Route.LoaderArgs) {
  let item = await getItem(params.itemId);
  return data({
    item,
    title: item.name,
    description: item.summary,
  });
}

export const meta: Route.MetaFunction<typeof loader> = ({ loaderData }) => {
  if (!loaderData) return [];

  let { title, description } = loaderData;
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
  ];
};
```

## With Centralized SEO Helper

Use a helper function to generate consistent meta tags:

```tsx
import { data } from "react-router";
import { seo } from "~/lib/seo.server";

export async function loader({ request }: Route.LoaderArgs) {
  let t = await i18n.getFixedT(request);
  let item = await getItem();

  return data({
    item,
    meta: seo(t, {
      title: t("Page Title - {{name}}", { name: item.name }),
      description: t("Description for {{name}}", { name: item.name }),
      og: {
        title: item.name,
        description: item.summary,
        image: item.imageUrl,
      },
    }),
  });
}

export const meta: Route.MetaFunction<typeof loader> = ({ loaderData }) =>
  loaderData?.meta ?? [];
```

## OpenGraph Tags

```tsx
export const meta: Route.MetaFunction<typeof loader> = ({ loaderData }) => {
  if (!loaderData) return [];

  let { title, description, imageUrl, canonicalUrl } = loaderData;
  return [
    { title },
    { name: "description", content: description },

    // OpenGraph
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: imageUrl },
    { property: "og:url", content: canonicalUrl },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
  ];
};
```

## With Parent Data

Access parent route loader data:

```tsx
import type { loader as parentLoader } from "../_layout/route";

export const meta: Route.MetaFunction<
  typeof loader,
  { "routes/_layout": typeof parentLoader }
> = ({ loaderData, matches }) => {
  let parentData = matches.find((m) => m.id === "routes/_layout")?.data;

  return [{ title: `${loaderData?.item.name} | ${parentData?.siteName}` }];
};
```

## Handling Missing Data

Always handle the case where data might be undefined (error states):

```tsx
export const meta: Route.MetaFunction<typeof loader> = ({ loaderData }) => {
  // Return empty array or default meta when data is missing
  if (!loaderData) {
    return [{ title: "Error" }];
  }

  let { title, description } = loaderData;
  return [
    { title },
    { name: "description", content: description },
  ];
};
```

## Static Meta

For routes with static meta, you can return a simple array:

```tsx
export const meta: Route.MetaFunction = () => [
  { title: "About Us" },
  { name: "description", content: "Learn more about our company" },
];
```
