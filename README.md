# BedsideManner
## SBU Hacks Fall 2020 

Our goal during this event was to design a user-friendly interface to provide a patient with the opportunity to develop a stronger relationship with the hospital employees they interact with daily.  Hospital stays can be stressful, tiring, and, truthfully, quite intimidating. This design takes away some of that cold-hospital feeling via connecting the patient to the hard-working individuals that already do their best to make the patient’s stay bearable.  

Why is this necessary?  According to a Johns Hopkins study, a positive patient experience significantly improves positive outcomes, and a positive experience was often associated with forming a relationship and communication between the patient and medical staff. We believe this is a relatively simple way for the patient to make their hospital stay a tad bit more welcoming. 

Our project design utilizes HTML, CSS, JavaScript, and NodeJS to provide a multi-interface application that allows a few different avenues for the patient.  They can access multiple collapsible menus which preview the medical staff that have visited their room throughout their stay. In these menus, the patient can click on the desired practitioner (i.e their doctor) and visit their profile.  The profile includes the doctor’s picture, title, details on their last visit, and some information and facts about them. Another route for the patient is to view all the visits during their hospitalization. For instance, they could specifically look to see who visited them (i.e nurse, doctor, orderly) the day before at around noon. This lets them get familiar with the faces they consistently see and assign a name to that face.

In order for the visit information to be listed, the medical staff must input a “New Visit” response using our application. This information is then sent back and forth between our nodeJS backend via AJAX requests as needed. The purpose of the local NodeJS web server is to emulate a hospital server and database that would normally store this kind of data.

This was an interesting 24 hours for the group.  Our team consists of two BME majors with a data science background (python, matlab) and two computer science majors with limited web dev experience. Our brainstorming went well and it wasn’t a problem coming up with our idea; however, it required Javascript and HTML knowledge, which our BME members had no prerequisite knowledge of.  The first 60-90 minutes were spent getting familiarized with the language and formatting, but it worked out in the end.  Furthermore, this was the first hackathon three of our four members had ever participated in - so it was an unfamiliar experience to say the least. 

As for coding challenges, our main hurdles were getting the AJAX requests between the front and back end to work, becoming quickly well-versed with git, and managing the flow of data between different parts of the app in a seamless fashion. 

