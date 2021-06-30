//The approach is to make a row containing cells and then a container containing rows
//basically rows are children of container and cells are children of rows
//color will be chosen by clicking on the button
//n will al

container = document.querySelector('.container');
let n = 16 //we will vary the value of n using buttons later using .addEventListener('click')

for(i = 0; i < n; i++)
{
	row = document.createElement('div');
	row.className = "columns"
	for(j = 0; j< n;j++ )
	{
		cell = document.createElement('div');
		cell.className = "cells";
		row.appendChild(cell);
	}

	container.appendChild(row);
}

function colorChange()
{
	this.style.backgroundColor = 'transparent';
}

let nodeList = container.childNodes;
for(i=0;i<nodeList.length;i++)
{
    const children = Array.from(nodeList[i].children);

    for(j=0; j < children.length; j++)
    {
        children[j].addEventListener('mouseover', colorChange);
    }
}