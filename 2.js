const figureRect ={
	figure: 'rectangle',
	input: {
		height: 5,
		width: 6
	}
};

function calculateArea({figure, input, input: {height, width}})
{
	const obj = {};
	obj.figure = figure;
	obj.input = input;
	obj.area = height * width;
	
	return obj;
}

const rect = calculateArea(figureRect);