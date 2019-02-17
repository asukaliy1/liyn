---
title: "Gatsby-link学习（测试）"
date: "2018-10-12"
tag: "Gatsby,react"
link: "20181012"
---


# Gatsby-link学习
For internal navigation, Gatsby includes a built-in <Link> component as well as a navigate function which is used for programmatic navigation.

Gatsby’s <Link> component enables linking to internal pages as well as a powerful performance feature called preloading. Preloading is used to prefetch resources so that the resources are fetched by the time the user navigates with this component. We use an IntersectionObserver to fetch a low-priority request when the Link is in the viewport and then use an onMouseOver event to trigger a high-priority request when it is likely that a user will navigate to the requested resource.


