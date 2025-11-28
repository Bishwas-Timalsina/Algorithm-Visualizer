import {
  Donut,
  Home,
  Link,
  List,
  ListCheck,
  Server,
  SquareStack,
  TreePine,
  Triangle,
} from "lucide-react";

export const NavSection = [
  {
    title: "Navigation",
    items: [
      {
        label: "Home",
        icon: Home,
      },
    ],
  },
  {
    title: "Data Structure",
    items: [
      {
        label: "Stack",
        icon: SquareStack,
      },
      {
        label: "Queue",
        icon: ListCheck,
      },
      {
        label: "Circular Queue",
        icon: Donut,
      },
      {
        label: "List",
        icon: List,
      },
      {
        label: "Linked List",
        icon: Link,
      },

      {
        label: "Binary Search Tree",
        icon: TreePine,
      },
      {
        label: "AVL Tree",
        icon: Triangle,
      },
      {
        label: "Heap",
        icon: Server,
      },
    ],
  },
];
