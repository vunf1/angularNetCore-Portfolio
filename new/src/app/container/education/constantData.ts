/**
 * GRID LAYOUT
 *
 *    -----------------   |__________|______|   |_________________|   |_________________|
 */
export let data: Array < string | Array < string | any > > = [
  [{
      title: "COVENTRY UNIVERSITY " + "COVENTRY, WEST MIDLANDS, UNITED KINGDOM",
      cols: 3,
      rows: 1,
      color: "white",
      class: "text-inside-grid-center",
    },
    {
      sdate: "September 2017 " + "Present",
      cols: 2,
      rows: 1,
      color: "#ffffff",
      class: "text-inside-grid-right",
    },
    {
      subtitle: "BACHELOR OF COMPUTER SCIENCE",
      cols: 5,
      rows: 1,
      color: "white",
      class: "text-inside-grid-center",
    },
    {
      description: "September 2017 -",
      cols: 5,
      rows: 2,
      color: "white",
      class: "text-inside-grid-justify",
    },
  ],
  [{
      title: "COVENTRY UNIVERSITY " + "\r" + "COVENTRY, WEST MIDLANDS, UNITED KINGDOM",
      cols: 3,
      rows: 1,
      color: "white",
      class: "text-inside-grid-center",
    },
    {
      sdate: "September 2017 " + " October 2017",
      cols: 2,
      rows: 1,
      color: "white",
      class: "text-inside-grid-center",
    },
    {
      subtitle: "BACHELOR OF COMPUTER SCIENCE",
      cols: 5,
      rows: 1,
      color: "white",
      class: "text-inside-grid-center",
    },
    {
      description: new Date(),
      cols: 5,
      rows: 2,
      color: "white",
      class: "text-inside-grid-center",
    },
  ],
];
