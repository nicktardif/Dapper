#Dapper
###JQuery Sliding Element Plugin

This JQuery plugin allows you to slide your HTML elements on and off the screen, giving the user the option to view the Dapper'ed element or not. This functionality is particularly useful for menus, legends, and other informational windows that supplement the primary content of the page.

####**Example:**
```javascript
$('#myDapperElement').dapper();
```
####**Example With Options:**
```javascript
$('myDapperElement').dapper({
    dapperButton1: '#legendButton',
    dapperButton2: '.closeButton',
    showTime: 200,
    hideTime: 1000,
    actionSide: 'left',
    sideOffset: 20,
    topOffset: 50
});
```

####**Options:**

<table>
	<tr>
		<td>dapperButton1</td>
		<td>
			JQuery selector for the element that activates the dapper function in its onclick<br>
			*Default value is '#dapper_button_1'*
		</td>
	</tr>
	<tr>
		<td>dapperButton2</td>
		<td>
			Another JQuery selector activating dapper in its onclick
			<ul><li>Default value is '#dapper_button_2'</li></ul>
		</td>
	</tr>
	<tr>
		<td>showTime</td>
		<td>
			Elapsed time (in milliseconds) for the show animation to complete
			<ul><li>Default value is 500</li></ul>
		</td>
	</tr>
	<tr>
		<td>hideTime</td>
		<td>
			Elapsed time (in milliseconds) for the hide animation to complete
			<ul><li>Default value is 500</li></ul>
		</td>
	</tr>
	<tr>
		<td>actionSide</td>
		<td>
			Determines which side the element slides in from
			<ul><li>Possible values are 'left' and 'right'</li></ul>
			<ul><li>Default value is 'right'</li></ul>
		</td>
	</tr>
	<tr>
		<td>sideOffset</td>
		<td>
			Determines how far (in pixels) the element will be from the edge
			<ul><li>Default value is 0</li></ul>
		</td>
	</tr>
	<tr>
		<td>topOffset</td>
		<td>
			Determines how far (in pixels) the element will be from the top
			<ul><li>Default value is 0</li></ul>
		</td>
	</tr>
</table>
