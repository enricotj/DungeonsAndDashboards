# Dungeons and Dashboards

## Current Features
We have a title and some idea of what we're doing.

## Requested Features

### Party Dashboard
Get instant feedback on the state of your own character and other party members! Make edits in real-time!

#### Profile Info
- Player Name
- Character Name, Race, Gender, and Classes/Levels
- Portrait Image

#### Top Level Info
- Hit Points
- Spell Slots
- Mythic Power
- Legendary Power
- Armor Class
- Save Scores
- Perception
- Status Effects

#### Mid Level Info
- Sight/Sense Type and Range
- Move Speed
- Ability Points
- Featured Skills
- Languages
- Storage
- Affiliations
- Character Description, Height, Weight, Scrabble Score

#### Character Sheet
Why not track everything about your character here? For your eyes only! (Well, and the GM's too)

### Notebooks
Record important events, NPCs, Loot, Quests, and more! All from a single text box!

#### Basic Functionality
- Single Text Box
- Tags
	- Add
	- Delete
- Filter by Tags
- Reorder Events
	- This may have to be a dedicated mode that allows only one person to do this at a time... Otherwise chaos could ensue if you try to reorder in a filtered view or someone else also accidentally dragged one of the entries around.

#### Special Tags
**NPC, Loot, and Quest** tags will be used to automatically create new entries for their own, dedicated pages.
Here's an example command for entering a new NPC!

	Template: 'NPC: name / race / class / affiliation / description'
	Complete Example: 'NPC: Pink-Beard / Dwarf / Bard / Songs of the Seven Seas / He has a pink beard and a voice like Freddie Mercury.'
	Incomplete Example: 'NPC: Green-Beard / * / * / * / We only know his name.'

In the above 'Complete Example', Pink-Beard would be entered in as a new NPC encounter!

Some kind of autocomplete mechanism for these special tag commands will be needed.

#### Search
The ability to have some kind of real-time auto-complete or 'Fuzzy Search' would be nice to have here.

	'Search: Beard'
