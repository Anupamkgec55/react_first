import React from "react";
import ReactDOM from "react-dom/client";

const x=React.createElement('div',{id:'parent'},
[React.createElement('div',{id:'child1'},
React.createElement('h1',{id:'parent'},"Anupam"),React.createElement('h2',{id:'pq'},"sdf")),

React.createElement('div',{id:'child2'},
React.createElement('h1',{id:'gg'},"dsfss"),React.createElement('h2',{id:'pq'},"ddsfs"))]);

const root=ReactDOM.createRoot(document.getElementById('divi'));
root.render(x);