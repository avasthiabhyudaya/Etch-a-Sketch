//The approach is to make a row containing cells and then a container containing rows
//basically rows are children of container and cells are children of rows
//color will be chosen by clicking on the button
//n will al

let container = document.querySelector('.container');
let a = 0;
let o = 0;
let n = 16;


let colour = 'white';
 gridChange(n);

transparentCol = document.querySelector('.transparency');
opaqueCol = document.querySelector('.opaque');
rainbow = document.querySelector('.rainbow');
erase = document.querySelector('.Erase');

size_sixteen = document.querySelector('.sixteen');
size_thirtytwo = document.querySelector('.thirtytwo');
size_sixtyfour = document.querySelector('.sixtyfour');

square_buttons = document.querySelectorAll('.square');

for(k=0;k<square_buttons.length;k++)
{
	square_buttons[k].addEventListener('click',exclusiveShadow_square);
}

function exclusiveShadow_square()
{
	for(k=0;k<square_buttons.length;k++)
	{
		square_buttons[k].classList.remove('buttonShadow');
	}
	this.classList.add('buttonShadow');

}

round_buttons = document.querySelectorAll('.round');

for(k=0;k<round_buttons.length;k++)
{
	round_buttons[k].addEventListener('click',exclusiveShadow_round);
}

function exclusiveShadow_round()
{
	for(k=0;k<round_buttons.length;k++)
	{
		round_buttons[k].classList.remove('buttonShadow');
	}
	this.classList.add('buttonShadow');

}


size_sixteen.addEventListener('click',function () {n=16; gridChange(n);});
size_thirtytwo.addEventListener('click',function ()  {n=32; gridChange(n);});
size_sixtyfour.addEventListener('click', function ()  {n=64; gridChange(n);});

function colorChangetrans()
{
	colour = 'transparent';
}

function increaseOpacity(sing_cell)
{
	sing_cell.style.opacity += .2;
}

function colorChangerain()//currently the color only changes only on multiple clicks
{
	const cols = ['#9400D3','#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00','#FF0000'];
	colour = cols[a];
	a += 1;
	if(a==7)
	{
		a=0;
	}
}

function colorChangeerase()
{
	colour = 'white';
}


transparentCol.addEventListener('click', colorChangetrans);
//opaqueCol.addEventListener('click', colorChangeopaque);
rainbow.addEventListener('click', colorChangerain);
erase.addEventListener('click', colorChangeerase);

function gridChange(n)
{
	container.innerHTML = '';
	for(i = 0; i < n; i++)
	{
		row = document.createElement('div');
		row.className = "columns"
		for(j = 0; j< n;j++ )
		{
			cell = document.createElement('div');
			cell.className = "cells";
			row.appendChild(cell);
			    if(n == 64)
			    {
                	cell.style.width = '8px';
                	cell.style.height = '8px';
            	}
            	if(n == 16)
            	{
            		cell.style.width = '32px';
                	cell.style.height = '32px';
            	}
            	else if (n == 32)
            	{
                	cell.style.width = '16px';
                	cell.style.height = '16px';
            	}
		}

		container.appendChild(row);

	}
	addingEvents(container);
}

function drawing()
{
	this.style.backgroundColor = colour; //color will be chosen by button

}

function addingEvents(container)
{
	let nodeList = container.childNodes;
	for(i=0;i<nodeList.length;i++)
	{
	    const children = Array.from(nodeList[i].children);

	    for(j=0; j < children.length; j++)
	    {
	        children[j].addEventListener('mouseover', drawing);
	    }
	}
}