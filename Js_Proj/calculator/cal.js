function crate_html_tag(){
    //taking paragraph content here
    content = document.getElementById("input_text").value
    //creating <p> tag here
    para_element = document.createElement("p")
    //creating text node to get content
    our_data = document.createTextNode(content)
    //adding content to our paragraph
    para_element.append(our_data)
}