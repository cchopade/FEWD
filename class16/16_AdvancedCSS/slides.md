![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Advanced CSS

---

##Objectives

*  Recall key concepts in CSS.
*  Articulate the differences between relative, absolute and fixed positioning.
*  Implement grids to control the layout of a page.

---

##Agenda

* CSS Review
* Positioning
* Z-Index
* Grids

---

##CSS

It's been a while...
--

##What's a block element?

--

##What's an inline element?

-- 

##What's the difference between a class and an id?

--

##What's a media query?

--

##Why do you use a reset or normalize stylesheet?

---

##We've Seen Some Positioning Before

Remember Floats and Clears?

--

##Review: Floats

 The float property allows us to place an element on the left or right side of the page, and at the same time allow other elements to wrap around it! 

 ```
 .sidebar{
 	width: 25%;
 	float: right;
 }
 ```
--

##Review: Clear

It specifies whether an element can be next to floating elements that precede it or must be below them. 

```
footer{
	width: 100%;
	clear: both;	
}
```

---

##CSS Positioning

The position property allows us to make complex layouts by controlling where elements are displayed on the page.

--

##Five Types of Positioning

*	Static
*	Relative
*	Absolute
*	Fixed
*	Inherit

---

##Normal Flow

The normal flow of the document is how your elements stack one on top of each other, from the top down, in the order in which they appear in your markup.

---

##Static Positioning

*	The default position value of an element.
*	Behaves using normal flow. 
*	If you have three statically positioned elements, they will stack one on top of the next.


[Static Positioning Example](http://codepen.io/laurenwburton/pen/EVrYLJ)

---

##Relative Positioning

*	Behave just like statically positioned elements.
*	They can be adjusted by offset properties: `top`, `right`, `bottom`, and `left`. 
*	Elements move in relation to where they naturally are on the page.


[Relative Positioning Example](http://codepen.io/laurenwburton/pen/jbdNKz)

---

##Absolute Positioning

*	An absolutely positioned element is removed from the normal flow. 
*	You can put it anywhere and it won't affect any other element.
*	They can be adjusted by offset properties: `top`, `right`, `bottom`, and `left`. 
*	The offset is in relation to the closest relatively positioned parent element or the document.


[Absolute Positioning Example](http://codepen.io/laurenwburton/pen/bVzbjY)

---

##Fixed Positioning

*	Similar to an absolutely positioned element
*	Fixed position elements do not scroll with the document. 
*	They stays locked in place while the document continues scrolling.


[Fixed Positioning Example](http://codepen.io/laurenwburton/pen/avXoag)

---

##Inherit Positioning

The element inherits the value of its parent element. The `static` value is assigned if no `position` value is given.

---

##Z-index

*	The `z-index` property in CSS controls the vertical stacking order of elements that overlap. 
*	Without any `z-index` value, elements stack in the order that they appear in the DOM (the lowest one down at the same hierarchy level appears on top). 

---

## What is a grid system?

*	A collection of css styles that allow you to quickly put together a responsive columned layout.
*	It's a structure that allows for content to be stacked vertically and horizontally consistently and easily manageable. 
*	Grids are project-agnostic giving it a high degree of portability.

--

## What are the components?

* Rows - accommodate the columns.
* Columns - contain the actual content.
* Containers - wrappers for the layout.
* Gutters - margin between columns.

--

## Grids

The standard twelve column grid

![Respnosive Grid](../../img/unit_1/responsive-grid.png)

--

## Grids

Example using Bootstrap grid system (http://getbootstrap.com/)

```
<div class="container-fluid">
   <div class="row">
      <div class="col-md-3">Column 3</div>
      <div class="col-md-3">Column 3</div>
      <div class="col-md-3">Column 3</div>
      <div class="col-md-3">Column 3</div>
   </div>
   <div class="row">
      <div class="col-md-2">Column 2</div>
      <div class="col-md-8">Column 8</div>
      <div class="col-md-2">Column 2</div>
   </div>
</div>
```
--

## Grids

Some popular CSS grids / frameworks

* [Bootstrap](http://getbootstrap.com/)
* [Foundation](http://foundation.zurb.com/)
* [1%](http://onepcssgrid.mattimling.com/)
* [Gumby](http://gumbyframework.com/)
* [Unsemantic](http://unsemantic.com)
* [Skeleton](http://www.getskeleton.com/)

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Responsive Layout with Grids!

---

##Homework

*	Work on your final projects

--

##Exit Survey 

Class 16 - Advanced CSS Exit Ticket: http://goo.gl/forms/0pEh2Vyx2Y
