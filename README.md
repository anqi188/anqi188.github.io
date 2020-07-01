# LaaS Evaluation Software
This project includes 2 user study phases:
- Study 1: User Performance Study (welcome.html)
- Study 2: Perceived Quality Evaluation (welcome_s2.html)

## Installation
```python
git clone https://github.com/anqi188/anqi188.github.io.git
```

## Dataset
Study 1 and Study 2 utilize the same testing dataset, which is stored in [/dataset_png](https://github.com/anqi188/anqi188.github.io/tree/master/dataset_png) and managed by .json file.

### .json (.js) file for dataset management
**Tree 1.** Description of the structure for dataset management .json file
```
|--"id"
|--"variants"
  |-- C0
    |--"condition": 0
    |--"img_id"
    |--"ioi_id"
    |--"coords"
  |--C1
    ...
  |--C2
    ...
  |--C3
    ...
...
```
  
**Table 1.** Description of dataset management .json file
|Key  |Description            |Exemple  |
|:-   |:-                     |:-
|id   |The id of the selected webpage |"1-yle"  |
|variants |Wrapping the 4 design variants for the selected webpage|  |
|condition  |The condition of design variants: 0, 1, 2, 3 stand for original, selection time, saliency, combination |"C0" |
|img_id |The id of the design variant image |"1-yle_0"  |
|ioi_id |The id of the item of interest for this design variant |"1-yle_0"  |
|coord  |The coordinate of the item of interest on the design variant image |"77,2562,525,3121" |

*NB:* 
- Since it’s a bit of hassle to read local json file, here we use the .js file ([data.js](https://github.com/anqi188/anqi188.github.io/blob/master/js/data.js)) to contain the json file
- The coords of IOI is obtained manually by this [tool](https://www.image-map.net/)

### Image folder for the dataset
**Tree 1.** Description of the structure for dataset image folder
```
|-- dataset_png
  |-- id
    |--image of design variant 0 (img_id_0.png)
    |--image of the IOI of design variant 0 (img_id_0_i.png)
    |--image of design variant 1 (img_id_1.png)
    |--image of the IOI of design variant 1 (img_id_1_i.png)
    |--image of design variant 2 (img_id_2.png)
    |--image of the IOI of design variant 2 (img_id_2_i.png)
    |--image of design variant 3 (img_id_3.png)
    |--image of the IOI of design variant 3 (img_id_3_i.png)
  ...
  |-- testing data
```

*NB:* 
- For each selected website, the images for 4 design variants and 4 cooresponding IOI are put under the same folder, which is named by the id of this website.
- For clearer demonstration, 4 design variants for one selected website are marked with C0/C1/C2/C3 on the top-left corner of each image.
- The [/testing data](https://github.com/anqi188/anqi188.github.io/tree/master/dataset_png/testing%20data) folder and [testdata.js](https://github.com/anqi188/anqi188.github.io/blob/master/js/testdata.js) contain the data for the testing phase of Study 1. Please **Do Not REMOVE THEM**.

## Process of the user study
### Study 1 
[Demo video](https://drive.google.com/file/d/1HFqTButZFzcvyVd8wyzVeT-1x_x68FnQ/view?usp=sharing) for Study 1

[Try it out](https://anqi188.github.io/welcome.html)

- Testing phase: 3 trials for participants to get to know how it works and stablize their performance. These 3 trials will **not** be logged into the result.
- Formal study phase: Consisting of 3 rounds of trials, the participant will interact with the entire subdataset in each round, and repeat the study 3 times altogether.
- The study result needs to be downloaded by the participant, and send to the contact person.
- For the detailed instruction, please see in [welcome.html](https://github.com/anqi188/anqi188.github.io/blob/master/welcome.html)
### Study 2
[Demo video](https://drive.google.com/file/d/14dW0QNpL1puop0k9VBWqko8_ejKVGcp2/view?usp=sharing) for Study 2

[Try it out](https://anqi188.github.io/welcome_s2.html)

- Inspecting and grading 4 design variants in each trial.
- The study result needs to be downloaded by the participant, and send to the contact person.
- For the detailed instruction, please see in [welcome_s2.html](https://github.com/anqi188/anqi188.github.io/blob/master/welcome_s2.html)

## Result
### Study 1
**Table 2.** Description of result .csv file for Study 1
|Key  |Description            |Exemple  |
|:-   |:-                     |:-
|img_id |The id of the design variant image |2-bbc2_0  |
|img_size |The original size of the .png file for the design variant |1893,3427  |
|img_size_s |The scaled size of the design variant(width=1200px, height=auto) |1200,2173  |
|ioi_id |The id of the item of interest for this design variant |2-bbc2_0_i  |
|ioi_coords |The original coordinate of the IOI  |6,1826,710,2549  |
|ioi_coords_s |The scaled coordinate of the IOI  |3,1157,450,1615  |
|click_coords |The coordinate of the click event |178,1399  |
|result |The result of this trial: correct/incorrect/skip |correct  |
|time_loaded  |Timestamp for the image loaded time  |1590416232132  |
|time_clicked |Timestamp for when the click event happens |1593616485166  |
|pstime |The duration of the seach-and-point time(ms), namely the difference between time_clicked and time_loaded |5424 |
|device |The size of the device |1280.00,720.00 |
|screen |The size of the screen |1280.00,680.00 |
|viewport |The size of the viewport |1280.00,578.00 |
|document |The size of the document |1280.00,578.00 |

#### Example
[Demo video](https://drive.google.com/file/d/1HFqTButZFzcvyVd8wyzVeT-1x_x68FnQ/view?usp=sharing) for Study 1

In this demo, 4 trials in the first round are all correct. In second round they are all incorrect, and all trials are skipped in the third round.

[Result](https://github.com/anqi188/anqi188.github.io/blob/master/anqi_22_Female_S1%20.csv) for this demo video

### Study 1
**Table 3.** Description of result .csv file for Study 2
|Key  |Description            |Exemple  |
|:-   |:-                     |:-
|img_id |The id of the design variant image |2-bbc2  |
|C0   |The PAQ for design variat based on condition 0|4 |
|C1   |The PAQ for design variat based on condition 1|4 |
|C2   |The PAQ for design variat based on condition 2|4 |
|C3   |The PAQ for design variat based on condition 3|4 |

#### Example
[Demo video](https://drive.google.com/file/d/14dW0QNpL1puop0k9VBWqko8_ejKVGcp2/view?usp=sharing) for Study 2

[Result](https://github.com/anqi188/anqi188.github.io/blob/master/anqi_22_Female_S1%20.csv) for this demo video

## Other resources
- [Research Paper](https://docs.google.com/document/d/1BIt8EA-dHLKCPPqzCua4hqiTfUZBci4Qc3pR8m8LZRE/edit?usp=sharing) (Study plan)
- [Slides](https://docs.google.com/presentation/d/1dYSswe6V1nCt215ZSHnTfElFrPhNNFNL3xya5v47DKs/edit?usp=sharing) for study plan

## Credits
Big thanks to Markku Laine, Kashyap Todi, Jussi Jokinen for their kind support for the planning and development of LaaS user study project.

## Contributor
Anqi Yang (anqi.yang@aalto.fi)


