// Platinum Package Data - Real content users can copy and use

export interface ProfitPack {
  id: string;
  name: string;
  niche: string;
  emoji: string;
  value: string;
  commission: string;
  color: string;
  bgColor: string;
  borderColor: string;
  posts: DayContent[];
}

export interface DayContent {
  day: number;
  caption: string;
  hashtags: string;
  imageDescription: string;
}

export interface HighTicketProduct {
  id: string;
  title: string;
  price: string;
  commission: string;
  rating: number;
  reviews: number;
  category: string;
  isHot: boolean;
  asin: string;
  bulletPoints: string[];
}

// FITNESS PACK - 30 Days of Posts
const fitnessPosts: DayContent[] = [
  {
    day: 1,
    caption: `Just discovered the BEST home workout equipment 🏋️‍♀️

I've tried dozens of products, but THIS one actually delivers results.

No gym membership needed. No excuses.

Drop a 💪 if you're ready to transform your home workouts!

Link in bio 👆`,
    hashtags: '#homeworkout #fitnessmotivation #homegym #workoutathome #fitnessjourney #getfit #healthylifestyle #exercise #fitfam #workout',
    imageDescription: 'Person working out at home with fitness equipment, energetic and motivational',
  },
  {
    day: 2,
    caption: `Stop wasting money on gym memberships you don't use 🙅‍♀️

Here's what I did instead:

→ Set up a simple home gym
→ Saved $50/month
→ Work out whenever I want
→ No waiting for equipment

Best decision I ever made.

Want to know exactly what I use? Link in bio!`,
    hashtags: '#homegym #savemoney #fitnesstips #workoutmotivation #gymathome #fitnessgoals #healthyliving #fitlife #noexcuses #fitnessgear',
    imageDescription: 'Before/after style showing gym vs home workout setup',
  },
  {
    day: 3,
    caption: `"I don't have time to go to the gym"

Sound familiar? That was me too.

Then I found equipment that fits in my apartment and gives me a FULL body workout in 20 minutes.

Game. Changer.

Comment "INFO" and I'll share what it is! 👇`,
    hashtags: '#busylife #quickworkout #apartmentfitness #20minuteworkout #fitnesshack #timesaver #workoutsolution #fitnesstransformation #homefitness #getstrong',
    imageDescription: 'Compact fitness equipment in small apartment space',
  },
  {
    day: 4,
    caption: `The secret nobody tells you about getting fit:

It's not about the fancy gym.
It's not about expensive trainers.
It's not about complicated routines.

It's about CONSISTENCY with the right tools.

Here's my go-to equipment that made staying consistent EASY ⬇️`,
    hashtags: '#consistencyiskey #fitnesstip #simplifyfitness #workoutconsistency #fitnesssecret #easyworkout #fitnesstools #stayconsistent #workoutroutine #fitnessmindset',
    imageDescription: 'Simple, clean home gym setup emphasizing consistency',
  },
  {
    day: 5,
    caption: `POV: You finally found workout equipment that ACTUALLY works 😍

No more:
❌ Dusty equipment in the corner
❌ Wasted money on gimmicks
❌ Complicated setups

Just results. Pure and simple.

This is what's working for me 👆`,
    hashtags: '#povfitness #workoutwins #fitnessresults #nomoregimmicks #realresults #fitnessequipment #workoutsuccess #fitnesswin #homeexercise #effectiveworkout',
    imageDescription: 'Happy person using fitness equipment with visible results',
  },
  {
    day: 6,
    caption: `My morning routine that changed everything:

5:30 AM - Wake up
5:35 AM - 20 min workout (at HOME)
5:55 AM - Shower
6:15 AM - Ready to conquer the day

The equipment I use makes this possible.

Who else is a morning workout person? 🌅`,
    hashtags: '#morningroutine #earlybird #morningworkout #5amclub #productivemorning #fitnessroutine #starttheday #morningmotivation #workoutlife #dailyroutine',
    imageDescription: 'Morning workout scene with sunrise vibes',
  },
  {
    day: 7,
    caption: `Week 1 ✅

Started my new home workout routine and I'm already feeling the difference.

Energy levels: 📈
Mood: 📈
Confidence: 📈

If you're on the fence about starting, this is your sign!

What's holding you back? Let's chat 👇`,
    hashtags: '#week1done #fitnesscheck #workoutprogress #fitnessupdate #feelinggood #energyboost #moodbooster #fitnessstart #beginnerworkout #starttoday',
    imageDescription: 'Progress check-in style image with positive energy',
  },
  {
    day: 8,
    caption: `Real talk: I used to HATE working out.

Gyms felt intimidating.
Equipment was confusing.
I never saw results.

Then I simplified everything with ONE piece of equipment.

Now I actually look forward to my workouts 😱

DM me "CHANGE" to learn more!`,
    hashtags: '#realtalk #fitnesstransformation #hatedgym #nowilove #simpleisfitness #oneequipment #fitnesschange #workoutlove #mindsetshift #fitnessjourney',
    imageDescription: 'Transformation journey showing mindset change',
  },
  {
    day: 9,
    caption: `3 reasons I stopped going to the gym:

1. $50+/month adds up fast
2. Commute time = wasted time
3. Waiting for equipment is annoying

My solution? 

Built a home gym for less than 3 months of membership.

Best investment of 2024 💯`,
    hashtags: '#quitthegym #homegymlife #smartinvestment #fitnessmath #savemoney #timesaver #homegymsetup #fitnessbudget #smartfitness #worthit',
    imageDescription: 'Cost comparison graphic gym vs home',
  },
  {
    day: 10,
    caption: `Your apartment is too small for a home gym?

That's what I thought too.

Then I found equipment that:
✅ Folds flat
✅ Stores under the bed
✅ Sets up in 30 seconds

Small space? No problem.

Link to what I use in bio!`,
    hashtags: '#smallspace #apartmentliving #compactfitness #foldableequipment #spacesaver #tinyhomegym #apartmentworkout #smallspacefitness #cleverfitness #fitanywhere',
    imageDescription: 'Compact equipment in small apartment, showing storage',
  },
  {
    day: 11,
    caption: `Day 11 check-in! 💪

Who's working out with me this week?

Remember: Progress, not perfection.

Even 10 minutes counts. Even a walk counts. Just MOVE.

What's your workout today? Drop it below! 👇`,
    hashtags: '#checkin #workoutbuddy #progressnotperfection #10minuteworkout #justmove #dailymovement #fitnessaccountability #workoutcommunity #fitnesscheckin #keepmoving',
    imageDescription: 'Community workout check-in style image',
  },
  {
    day: 12,
    caption: `Hot take: You don't need a gym to get in shape 🔥

I've seen better results working out at home than I ever did at expensive gyms.

Why?

→ No commute = more time to actually work out
→ No waiting = efficient workouts
→ No judgment = confidence to try new things

What's your take? 👇`,
    hashtags: '#hottake #homegymvsym #fitnessopinion #workoutdebate #homeisbetter #efficientworkout #confidentworkout #fitnessthoughts #unpopularopinion #gymtalk',
    imageDescription: 'Split image comparing home gym benefits vs traditional gym',
  },
  {
    day: 13,
    caption: `The "I'll start Monday" trap:

Monday comes... too tired.
Tuesday... busy day.
Wednesday... eh, next week.

Sound familiar?

Here's what actually works:
Start NOW. Start small. Start at HOME.

No more excuses. Link in bio for what helped me start!`,
    hashtags: '#starttoday #nomoreMonday #noexcuses #startsmall #startnow #fitnessexcuses #breakthehabbit #juststart #fitnesshelp #getmoving',
    imageDescription: 'Motivational image about starting today not Monday',
  },
  {
    day: 14,
    caption: `2 weeks in! Here's what I've learned:

1. Consistency beats intensity
2. Home workouts are underrated
3. The right equipment makes ALL the difference
4. Morning workouts > evening workouts (for me)

What's your biggest fitness lesson? Share below! 📝`,
    hashtags: '#2weeks #fitnesslessons #whatIlearned #consistencyoverIntensity #morningworkouts #fitnessreflection #halfwaythere #fitnessthoughts #learnedthehardway #fitnesstips',
    imageDescription: 'Reflection/milestone celebration image',
  },
  {
    day: 15,
    caption: `Halfway through the month! 🎉

If you started with me, how are you feeling?

If you haven't started yet... what are you waiting for?

Your future self will thank you.

Let's finish this month STRONG! 💪`,
    hashtags: '#halfwaythere #monthchallenge #fitnessgoals #futureself #finishstrong #fitnesscommitment #keepgoing #dontquit #midmonth #fitnessmotivation',
    imageDescription: 'Celebration halfway point milestone image',
  },
  {
    day: 16,
    caption: `Quick workout I did this morning:

→ 10 squats
→ 10 push-ups  
→ 10 lunges
→ 30 sec plank
→ Repeat 3x

Total time: 15 minutes
Equipment needed: Just one thing

No excuses. Get it done! 🔥`,
    hashtags: '#quickworkout #15minuteworkout #noexcuseworkout #morningworkout #bodyweightworkout #simpleWorkout #workoutideas #tryThis #fitnessinspiration #getitdone',
    imageDescription: 'Workout routine infographic style',
  },
  {
    day: 17,
    caption: `"But I can't afford a home gym..."

Neither could I.

Then I found ONE piece of equipment under $100 that replaced:
- Dumbbells
- Resistance bands  
- Ab roller
- And more

Quality > Quantity

Link in bio to see what it is!`,
    hashtags: '#budgetfitness #affordablefitness #under100 #cheapworkout #qualityoverquantity #fitnessbudget #smartshopping #fitnessdeals #budgethomegym #savemoneygetfit',
    imageDescription: 'Budget-friendly fitness equipment showcase',
  },
  {
    day: 18,
    caption: `Things that changed when I started working out consistently:

😴 Better sleep
🧠 Clearer mind
⚡ More energy
😊 Better mood
💪 Stronger body

And it all started with 15 minutes a day at home.

What would YOU change? 👇`,
    hashtags: '#fitnessbenefits #bettersleep #clearermind #moreenergy #bettermood #strongerbody #15minutes #fitnesschanges #lifechanging #workoutbenefits',
    imageDescription: 'Benefits of fitness lifestyle graphic',
  },
  {
    day: 19,
    caption: `Saturday morning vibes 🌟

Who else loves a good weekend workout?

There's something about starting the weekend with movement that sets the tone for everything else.

What's your weekend fitness routine?`,
    hashtags: '#saturdayworkout #weekendvibes #weekendwarrior #saturdaymorning #weekendfitness #starttheweekendRight #fitweekend #weekendmotivation #saturdaysweat #weekendgoals',
    imageDescription: 'Relaxed weekend morning workout scene',
  },
  {
    day: 20,
    caption: `20 days of consistent workouts! 

Not gonna lie, some days were HARD.

But I showed up anyway.

That's the secret nobody talks about - it's not about motivation, it's about DISCIPLINE.

Keep going! 💪`,
    hashtags: '#20days #consistency #discipline #showup #harddays #keeppushing #fitnessjourney #nodaysoff #disciplineovermotivation #fitnesscommitment',
    imageDescription: '20 day milestone achievement image',
  },
  {
    day: 21,
    caption: `3 weeks down! 🎯

Here's my honest progress:

Week 1: Excited, everything hurt
Week 2: Found my rhythm
Week 3: Starting to see changes

It gets EASIER. Trust the process.

How's your journey going?`,
    hashtags: '#3weeks #fitnessProgress #honestreview #trusttheprocess #gettingeasier #fitnessupdate #3weekchallenge #progressreport #fitnessjourney #keepgoing',
    imageDescription: 'Three week progress journey visualization',
  },
  {
    day: 22,
    caption: `Monday motivation 🔥

New week, new opportunities to crush it.

Remember: You don't have to be perfect.

You just have to be consistent.

What's your goal this week?`,
    hashtags: '#mondaymotivation #newweek #crushit #consistencyiskey #weeklygoals #fitnessmonday #startfresh #motivationmonday #fitnessgoals #newopportunities',
    imageDescription: 'Monday motivation energetic fitness image',
  },
  {
    day: 23,
    caption: `The best time to start was yesterday.

The second best time is NOW.

Stop waiting for:
- Monday
- New Year
- "The right time"

There's no perfect moment. There's only NOW.

Ready to start? Link in bio 👆`,
    hashtags: '#startnow #noperfecttime #stopwaiting #todayistheday #noexcuses #fitnessstart #begintoday #takeaction #juststart #fitnessadvice',
    imageDescription: 'Urgent/motivational start now image',
  },
  {
    day: 24,
    caption: `Quick tip that changed my workouts:

Instead of "I HAVE to work out"

Try "I GET to work out"

Mindset shift = Game changer

Your body is capable of amazing things. Treat it like a privilege, not a punishment! 🙏`,
    hashtags: '#mindsetshift #getto #gratitude #fitnessminset #positivethinking #workoutmindset #changeyourmind #fitnessattitude #blessed #fitnessperspective',
    imageDescription: 'Mindset transformation motivational image',
  },
  {
    day: 25,
    caption: `5 days left in our challenge! 

Who's still with me? 

Drop a 🔥 if you've been showing up!

We're in the home stretch. Let's finish strong together!`,
    hashtags: '#5daysleft #homestretch #finishstrong #challengeupdate #fitnessChallenge #almostthere #keepgoing #community #fitfam #lastpush',
    imageDescription: 'Countdown celebration community image',
  },
  {
    day: 26,
    caption: `My favorite thing about home workouts:

I can look absolutely RIDICULOUS and no one cares 😂

Dance between sets? ✅
Sing along to music? ✅
Take breaks to pet my dog? ✅

That's the freedom of home fitness!

What's YOUR favorite part?`,
    hashtags: '#homeworkoutperks #nojudgment #workoutfreedom #beYourself #funworkout #homegymlife #workoutvibes #reallife #fitnesshumor #enjoytheprocess',
    imageDescription: 'Fun, lighthearted home workout scene',
  },
  {
    day: 27,
    caption: `Let's talk about REST days 🛋️

They're not lazy days.
They're GROWTH days.

Your muscles need recovery.
Your mind needs reset.

Rest is part of the program, not cheating on it!

Taking a rest day today. What about you?`,
    hashtags: '#restday #recovery #musclerecovery #restisimportant #takeabreak #listentoyourbody #restdayvibes #fitnessrest #growthhappensatrest #selfcare',
    imageDescription: 'Rest and recovery themed relaxation image',
  },
  {
    day: 28,
    caption: `Almost done with our 30-day journey!

Look how far you've come:

✅ 28 days of showing up
✅ Building a habit that sticks
✅ Proving to yourself you CAN do this

2 more days. Let's GO! 🚀`,
    hashtags: '#28days #almostdone #lookhowfar #habitformed #youcandoit #2moretogo #fitnesswin #proofofprogress #believeinyourself #finishline',
    imageDescription: 'Near finish line achievement image',
  },
  {
    day: 29,
    caption: `Tomorrow is day 30! 

Before we celebrate, I want to say:

Whether you did all 30 days or just 3...
Whether you saw huge results or small ones...

You STARTED. You TRIED.

That's more than most people do.

Be proud of yourself! 👏`,
    hashtags: '#day29 #almostthere #beproud #celebrateyourself #youstarted #youTried #progressisprogress #fitnessWin #proudofyou #everystepcounts',
    imageDescription: 'Celebration and pride emotional image',
  },
  {
    day: 30,
    caption: `DAY 30! WE DID IT! 🎉🎉🎉

30 days of:
💪 Workouts
🔥 Dedication  
⭐ Growth

This isn't the end - it's just the beginning.

Thank you for being on this journey with me!

What's your NEXT fitness goal? Let's keep going! 🚀`,
    hashtags: '#day30 #wedidit #30daychallenge #fitnessaccomplishment #newbeginning #thankyou #whatsnext #keepgoing #fitnessforever #journeycontinues',
    imageDescription: 'Grand celebration day 30 completion image',
  },
];

// KITCHEN PACK - 30 Days of Posts
const kitchenPosts: DayContent[] = [
  {
    day: 1,
    caption: `Kitchen upgrade that changed my life 🍳

Went from burnt toast to gourmet meals.

All because of ONE gadget.

If you struggle with cooking, you NEED to see this!

Link in bio 👆`,
    hashtags: '#kitchenhack #cookingmadeeasy #kitchenupgrade #homecooking #kitchengadget #easycooking #foodie #cookathome #kitchenessentials #gamechanger',
    imageDescription: 'Beautiful kitchen setup with highlighted gadget',
  },
  {
    day: 2,
    caption: `Meal prep Sunday! 🥗

Just prepped the entire week's meals in 2 hours.

The secret? Having the right kitchen tools.

Who else is a meal prep person? 

Share your favorite prep tip below! 👇`,
    hashtags: '#mealprep #mealprepSunday #healthyeating #foodprep #kitchentools #weeklymealprep #eatclean #preplife #mealplanning #healthylifestyle',
    imageDescription: 'Organized meal prep containers and kitchen setup',
  },
  {
    day: 3,
    caption: `Why I stopped eating out:

💸 Saved $400/month
🥗 Eating healthier
⏰ Actually faster than delivery
🏠 Quality family time

All it took was investing in my kitchen.

Best decision of 2024!`,
    hashtags: '#stopeatingout #savemoney #homecooking #healthyeating #familytime #kitcheninvestment #cookaThome #moneysaving #smartspending #lifehack',
    imageDescription: 'Money saving and home cooking comparison',
  },
  {
    day: 4,
    caption: `3 kitchen gadgets under $50 that I use DAILY:

1. [Product 1] - Life changing
2. [Product 2] - Total game changer  
3. [Product 3] - Can't live without

Which one do you want to know more about?

Comment below! 👇`,
    hashtags: '#kitchengadgets #under50 #dailyuse #kitchenfinds #musthave #kitchentools #affordablekitchen #cookingessentials #kitchenhaul #homechef',
    imageDescription: 'Three kitchen gadgets displayed attractively',
  },
  {
    day: 5,
    caption: `"I'm not a good cook"

I used to say that too.

Then I realized: It's not about skill. It's about having the RIGHT TOOLS.

The right tools make anyone look like a chef! 👨‍🍳

What's holding you back from cooking more?`,
    hashtags: '#learntocook #kitchenconfidence #cookingtools #anyonecancook #chefathome #cookingjourney #kitchenhelp #easycooking #homechef #cookingmadeeasy',
    imageDescription: 'Confidence in cooking transformation image',
  },
  {
    day: 6,
    caption: `Friday night = homemade pizza night 🍕

Made from scratch in 30 minutes.

Better than delivery. Cheaper too.

Who else does pizza Friday?`,
    hashtags: '#pizzanight #homemadepizza #fridaynight #pizzafriday #familydinner #cookingtogether #pizzalove #fridayvibes #homemade #pizzatime',
    imageDescription: 'Delicious homemade pizza scene',
  },
  {
    day: 7,
    caption: `One week of cooking at home! ✅

Here's what changed:

→ More energy
→ Better sleep
→ Saved $100 already
→ Actually enjoying meals

Small changes, BIG results.

Try it for one week and see!`,
    hashtags: '#oneweek #cookathomechallenge #healthychanges #savemoney #mealplanning #weekonedone #healthbenefits #kitchenlife #cookingjourney #positivechanges',
    imageDescription: 'One week progress cooking at home',
  },
  {
    day: 8,
    caption: `The appliance that paid for itself in one month:

→ Use it every single day
→ Cuts cooking time in half
→ Makes cleanup easy
→ Replaced 3 other gadgets

If you only buy ONE thing for your kitchen, make it this!

Link in bio 👆`,
    hashtags: '#worthit #kitchenappliance #paidfortitself #dailyuse #timesaver #easycleanup #multitasker #kitcheninvestment #bestpurchase #smartbuy',
    imageDescription: 'Featured kitchen appliance showcase',
  },
  {
    day: 9,
    caption: `Sunday meal prep complete! 

This week's menu:
🥗 5 healthy lunches
🍝 3 easy dinners
🍳 7 breakfasts ready to go

Total time: 2 hours
Total cost: About $50

Who wants the recipes? 🙋‍♀️`,
    hashtags: '#mealprepsunday #weeklyprep #healthymeals #budgetmeals #easyrecipes #mealplanning #preplife #sundayfunday #healthyeating #foodprep',
    imageDescription: 'Complete weekly meal prep display',
  },
  {
    day: 10,
    caption: `Kitchen organization hack that changed everything:

Before: Couldn't find anything
After: Everything has a place

The secret? [Organization product]

Clean kitchen = clean mind 🧘‍♀️`,
    hashtags: '#kitchenorganization #organizationhack #cleankitchen #tidykitchen #kitchenhacks #organized #homeorganization #kitchentips #cleanspace #declutter',
    imageDescription: 'Before and after kitchen organization',
  },
  {
    day: 11,
    caption: `Real talk: I used to spend $15/day on lunch.

$15 x 5 days = $75/week
$75 x 4 weeks = $300/month

Now I meal prep and spend about $50/month.

That's $250 SAVED every month!

What would YOU do with extra $250?`,
    hashtags: '#moneysaved #lunchprep #budgetfood #mealprepping #smartmoney #savingmoney #financialfreedom #foodbudget #cheapmeals #lifehack',
    imageDescription: 'Money saving calculation visual',
  },
  {
    day: 12,
    caption: `What I eat in a day (all home cooked!):

🌅 Breakfast: Overnight oats
🌞 Lunch: Prepped chicken salad
🌙 Dinner: 15-min stir fry

Total cooking time today: 15 minutes

Because I have the right tools! 

What did YOU eat today?`,
    hashtags: '#whatieatinaday #homecookedmeals #easymeals #quickcooking #healthyday #fooddiary #mealideas #15minutemeals #simpEmeals #realfood',
    imageDescription: 'Full day of meals photo collage',
  },
  {
    day: 13,
    caption: `Kitchen upgrade on a budget:

You don't need to spend $1000s.

Start with ONE quality item that you'll use daily.

Build from there.

My first investment was [product] and I still use it 2 years later!`,
    hashtags: '#budgetkitchen #qualityoverquantity #kitchenupgrade #startsmall #smartshopping #kitchentips #budgetfriendly #onethingatatime #kitcheninvesting #worthit',
    imageDescription: 'Budget-friendly kitchen upgrade tips',
  },
  {
    day: 14,
    caption: `2 weeks of cooking at home! 🎉

Results so far:
💰 Saved: $200
⏰ Time cooking: Less than expected
🥗 Health: Feeling great
😊 Mood: Much better

Anyone else noticing changes?`,
    hashtags: '#2weeks #cookingchallenge #results #moneysaved #healthimprovement #moodboost #cookathome #progressupdate #2weeksin #positivechange',
    imageDescription: 'Two week milestone celebration',
  },
  {
    day: 15,
    caption: `The ONE kitchen rule I live by:

Clean as you go.

Sounds simple but it's a game changer.

No more mountain of dishes after cooking.

What's YOUR kitchen rule?`,
    hashtags: '#kitchenrule #cleanasyougo #tidykitchen #cookingtips #kitchenhack #nomoredishes #easycleanup #cookingsecret #kitchenlife #cleaningTip',
    imageDescription: 'Clean kitchen while cooking concept',
  },
  {
    day: 16,
    caption: `Made restaurant-quality pasta at home 🍝

Total cost: $8
Restaurant price: $25+

Same taste. Quarter of the price.

The secret is having good quality cookware.

Would you try making it at home?`,
    hashtags: '#homemadepasta #restaurantquality #savemoney #cookathome #pastanight #italianfood #cheapdinner #homechef #cookingwin #pastaLover',
    imageDescription: 'Restaurant quality pasta made at home',
  },
  {
    day: 17,
    caption: `Question: What's the ONE kitchen item you can't live without?

For me, it's definitely [product].

Use it literally every single day.

Drop yours below! 👇`,
    hashtags: '#kitchenfavorite #cantlivewithout #kitchenessential #dailyuse #kitchenquestion #letschat #kitchenlove #favoriteItem #musthave #kitchentalk',
    imageDescription: 'Favorite kitchen item showcase',
  },
  {
    day: 18,
    caption: `Meal prep hack nobody talks about:

FREEZE YOUR PORTIONS.

Make once. Eat for weeks.

My freezer is basically a restaurant 😂

Saves so much time and money!`,
    hashtags: '#freezermeals #mealprephack #freezercooking #batchcooking #timesaver #mealpreptips #freezerlife #moneysaver #cookingHack #mealprepideas',
    imageDescription: 'Organized freezer with prepped meals',
  },
  {
    day: 19,
    caption: `Saturday brunch at home > expensive restaurant brunch

Just made:
🥞 Fluffy pancakes
🥓 Crispy bacon
🍳 Perfect eggs
☕ Fresh coffee

Total: $10 for TWO people

Restaurant? Would be $50+`,
    hashtags: '#brunchathome #saturdaybrunch #homemadebrunch #savemoney #weekendvibes #brunchlife #homecooking #couplescooking #cheapbrunch #brunchgoals',
    imageDescription: 'Beautiful homemade brunch spread',
  },
  {
    day: 20,
    caption: `20 days of home cooking! 

Numbers don't lie:

🍽️ Meals cooked: 60+
💰 Money saved: ~$400
⏰ Average cooking time: 20 min
🥗 Healthy meals: 90%

This is sustainable. This is lifestyle change.`,
    hashtags: '#20days #homecookingjourney #moneysaved #healthylifestyle #sustainablechange #cookinglife #progressupdate #realresults #kitchenwin #lifestylechange',
    imageDescription: '20 day milestone infographic',
  },
  {
    day: 21,
    caption: `3 weeks of cooking more. Here's the truth:

Week 1: Exciting and new
Week 2: Got into rhythm  
Week 3: It's just normal now

That's the goal - make it a HABIT, not a chore.

How are you doing?`,
    hashtags: '#3weeks #habitformation #cookinghabit #progressjourney #truthbomb #makeitaHabit #normallife #kitchenjourney #realTalk #cookinglife',
    imageDescription: 'Three week journey reflection',
  },
  {
    day: 22,
    caption: `Monday motivation: Your kitchen is your wealth builder 💰

Every meal you make at home is:
→ Money in your pocket
→ Health in your body
→ Skills for life

What are you cooking this week?`,
    hashtags: '#mondaymotivation #kitchenwisdom #buildwealth #healthyhabits #lifeskills #cookingmotivation #savingmoney #monday #weekPlanning #kitchenlife',
    imageDescription: 'Motivational Monday kitchen image',
  },
  {
    day: 23,
    caption: `Quick tip: The best kitchen investment isn't always the most expensive one.

It's the one you'll actually USE.

Before buying, ask yourself:
"Will I use this at least 3x per week?"

If not, skip it.`,
    hashtags: '#kitchentip #smartshopping #kitcheninvestment #practicaladvice #buywisely #useIt #kitchenadvice #moneywise #shoppingtip #kitchenbuying',
    imageDescription: 'Smart shopping advice for kitchen',
  },
  {
    day: 24,
    caption: `Cooking confession: I still burn things sometimes 😂

Perfection isn't the goal.

Progress is.

Anyone else have cooking fails? Share your story! 👇`,
    hashtags: '#cookingconfession #cookingfails #notperfect #progressoverperfection #relatable #cookinghumor #kitchenfails #reallife #itsokay #learningProcess',
    imageDescription: 'Lighthearted cooking fails humor',
  },
  {
    day: 25,
    caption: `5 days until our cooking challenge ends!

Quick check: How much have you saved this month?

I'm at $450+ in food savings alone.

That's a nice vacation fund building up! 🏖️`,
    hashtags: '#5daysleft #savingschallenge #moneysaved #foodsavings #vacationfund #almostthere #challengeupdate #financialwin #cookingtosave #lastweek',
    imageDescription: 'Savings countdown celebration',
  },
  {
    day: 26,
    caption: `What I'm cooking this weekend:

🍕 Homemade pizza (Friday)
🌮 Taco night (Saturday)
🍗 Slow cooker Sunday

All for about $40 total.

Family of 4, entire weekend, $40.

Drop your weekend menu below!`,
    hashtags: '#weekendmenu #familymeals #budgetcooking #mealplanning #weekendcooking #familydinner #cheapmeals #menuPlanning #weekendVibes #familyfood',
    imageDescription: 'Weekend meal planning preview',
  },
  {
    day: 27,
    caption: `The appliance that changed my cooking game:

Before: Takeout 4x per week
After: Takeout maybe 1x per month

It's not about willpower.
It's about making cooking EASY.

What made cooking easier for you?`,
    hashtags: '#gameChanger #cookingmadeEasy #lesstakeout #kitchenwin #cookingAppliance #lifehack #easycooking #noMoreTakeout #kitchenupgrade #cookingjourney',
    imageDescription: 'Life changing kitchen appliance',
  },
  {
    day: 28,
    caption: `Almost at the finish line! 

28 days of cooking more at home.

What I've learned:
✅ I CAN cook
✅ It's not as hard as I thought
✅ The savings are REAL
✅ I actually enjoy it now

2 more days!`,
    hashtags: '#28days #almostdone #lessonslearned #cookingjourney #yescanyou #nothard #savings #enjoyIt #finishline #cookingwin',
    imageDescription: '28 day achievement milestone',
  },
  {
    day: 29,
    caption: `Tomorrow is day 30!

Before we celebrate, I want to know:

What was YOUR favorite meal you made this month?

Mine was [insert meal] - never thought I could make it at home!

Share yours! 👇`,
    hashtags: '#day29 #favoriteMeal #cookingmemories #almostThere #celebrationtime #shareyours #bestmeal #homecooking #cookingsuccess #monthlyReview',
    imageDescription: 'Day 29 reflection and sharing',
  },
  {
    day: 30,
    caption: `DAY 30! WE MADE IT! 🎉

30 days of cooking more at home.

Final stats:
💰 Total saved: $500+
🍽️ Meals made: 90+
⭐ New recipes tried: 15+
❤️ Memories made: Priceless

Thank you for cooking with me!

What's next for you? 🚀`,
    hashtags: '#day30 #weMadeIt #cookingChallenge #finalStats #moneysaved #newrecipes #memories #thankYou #whatsnext #cookingForever',
    imageDescription: 'Day 30 grand celebration finale',
  },
];

// TECH PACK - 30 Days of Posts
const techPosts: DayContent[] = [
  {
    day: 1,
    caption: `This tech gadget just changed my entire workflow 🚀

Went from frustrated to EFFICIENT.

If you work from home, you NEED this.

Link in bio to see what it is! 👆`,
    hashtags: '#techgadget #workfromhome #productivity #techlife #efficientwork #wfhsetup #techreview #gamechanger #homeoffice #productivityhack',
    imageDescription: 'Sleek tech gadget on modern desk setup',
  },
  {
    day: 2,
    caption: `My home office setup tour! 🖥️

Took months to perfect, but now it's:
✅ Ergonomic
✅ Productive  
✅ Actually enjoyable to work in

What's in YOUR setup?`,
    hashtags: '#homeoffice #desksetup #wfhlife #officegoals #workstation #remotework #deskTour #setupgoals #techsetup #workFromHome',
    imageDescription: 'Beautiful home office desk tour',
  },
  {
    day: 3,
    caption: `Stop working on a tiny laptop screen! 🙈

I added a second monitor and my productivity went 📈

Seriously, best tech investment I've made.

Who else is team dual monitor?`,
    hashtags: '#dualmonitor #productivityboost #techSetup #worksetup #monitorsetup #productivity #screenspace #techUpgrade #workEfficiency #laptoplife',
    imageDescription: 'Dual monitor productive workspace',
  },
  {
    day: 4,
    caption: `3 tech accessories under $100 that I use every day:

1. [Product] - Game changer for calls
2. [Product] - Saves my back
3. [Product] - Best cable management

Which one interests you most?`,
    hashtags: '#techAccessories #under100 #dailyTech #techRecommendations #workFromHome #techDeals #musthaveTech #techBuying #homeOfficeTech #techList',
    imageDescription: 'Three tech accessories displayed',
  },
  {
    day: 5,
    caption: `"I can't afford to upgrade my setup"

That's what I thought too.

Then I realized: Bad tools = wasted time.

Wasted time = wasted money.

Invest in your productivity. It pays for itself!`,
    hashtags: '#investInYourself #techInvestment #productivity #timeIsMoney #upgradeYourLife #worthIt #techROI #productivityInvestment #smartSpending #techValue',
    imageDescription: 'Investment in productivity concept',
  },
  {
    day: 6,
    caption: `Friday work setup appreciation post 💻

After a long week, I'm grateful for:
→ Fast WiFi
→ Comfortable chair
→ Great monitor
→ [Tech product]

What are YOU grateful for in your setup?`,
    hashtags: '#fridayFeeling #setupAppreciation #workSetup #grateful #weekendVibes #techGratitude #homeOffice #workFromHome #setupLove #techLife',
    imageDescription: 'Cozy Friday work setup',
  },
  {
    day: 7,
    caption: `One week with my new [tech product]!

First impressions:
⭐⭐⭐⭐⭐

Seriously exceeded my expectations.

Full review coming soon, but if you're considering it... DO IT.`,
    hashtags: '#techReview #firstImpressions #oneWeek #5stars #worthIt #techBuy #productReview #newTech #recommendation #buyIt',
    imageDescription: 'One week tech product review',
  },
  {
    day: 8,
    caption: `The ONE tech upgrade that saved my neck (literally):

My posture was terrible.
My neck hurt every day.
Working was painful.

Then I got [product].

Now? Pain free and productive! 💪`,
    hashtags: '#techHealth #neckPain #posture #ergonomic #healthyWork #techSolution #painFree #workplaceHealth #ergonomicSetup #healthTech',
    imageDescription: 'Ergonomic tech solution for health',
  },
  {
    day: 9,
    caption: `Tech tip that changed my life:

Wireless > Wired

No more:
❌ Tangled cables
❌ Limited movement
❌ Messy desk

Just clean, efficient workspace.

Have you gone wireless yet?`,
    hashtags: '#wirelessTech #cleanDesk #noMoreCables #techTip #deskOrganization #wirelessLife #cableFree #modernSetup #techUpgrade #efficiency',
    imageDescription: 'Clean wireless desk setup',
  },
  {
    day: 10,
    caption: `10 days in! How's your setup working for you?

I've been testing different arrangements and found:

Best for focus: Minimal desk
Best for calls: Good lighting
Best for long days: Ergonomic setup

What works for you?`,
    hashtags: '#10days #setupTesting #whatWorks #deskSetup #workFromHome #productivityTips #officeSetup #setupHacks #workOptimization #techSetup',
    imageDescription: '10 day setup optimization findings',
  },
  {
    day: 11,
    caption: `Unpopular opinion: You don't need the most expensive tech.

You need the RIGHT tech for YOUR needs.

Stop buying what influencers use.
Start buying what works for YOU.

Agree or disagree? 👇`,
    hashtags: '#unpopularOpinion #techAdvice #rightTech #smartBuying #personalNeeds #techTalk #honestReview #buyingSmart #techWisdom #yourNeeds',
    imageDescription: 'Smart tech buying advice',
  },
  {
    day: 12,
    caption: `What's in my tech bag? 🎒

→ Laptop (obviously)
→ [Accessory 1]
→ [Accessory 2]
→ [Accessory 3]

Everything I need to work from anywhere!

What's in YOUR bag?`,
    hashtags: '#techBag #whatInMyBag #mobileOffice #travelTech #workAnywhere #techCarry #laptopBag #digitalNomad #remoteworker #techEssentials',
    imageDescription: 'What is in my tech bag reveal',
  },
  {
    day: 13,
    caption: `The best money I've spent on my setup:

Not the fancy monitor.
Not the mechanical keyboard.

It was the [simple product] that I use 10x per day.

Sometimes simple = best!`,
    hashtags: '#bestPurchase #simpleTech #dailyUse #techValue #worthTheMoney #simpleIsBest #techBuy #qualityOverFlash #practicalTech #smartBuy',
    imageDescription: 'Simple but valuable tech item',
  },
  {
    day: 14,
    caption: `2 weeks with my upgraded setup! 📊

Results:
→ 30% more productive
→ 0 neck/back pain
→ Actually ENJOY working
→ Better video calls

The investment was worth every penny.`,
    hashtags: '#2weeks #setupResults #productivity #noPain #enjoyWork #videoCallsUpgrade #worthIt #techInvestment #setupUpgrade #results',
    imageDescription: 'Two week setup upgrade results',
  },
  {
    day: 15,
    caption: `Halfway through the month! 

Tech lesson of the week:

Good tech makes work easier.
Great tech makes work enjoyable.
The RIGHT tech makes work disappear into flow state.

What tech puts you in flow?`,
    hashtags: '#halfwayThere #techLesson #flowState #rightTech #workJoy #productivityFlow #techWisdom #midMonthReflection #workFlow #techGoals',
    imageDescription: 'Halfway point tech reflection',
  },
  {
    day: 16,
    caption: `Quick setup fix that cost $0:

Raised my monitor to eye level (used books!)

Instant improvement in:
✅ Posture
✅ Neck comfort  
✅ Focus

Sometimes the best hacks are free!`,
    hashtags: '#freeTip #setupHack #posture #monitorHeight #zeroCoast #quickFix #techHack #freeSolution #easyFix #setupTip',
    imageDescription: 'Free monitor height hack',
  },
  {
    day: 17,
    caption: `My video call setup secrets:

1. Ring light (game changer!)
2. Camera at eye level
3. Clean background
4. Good audio

Result: Looking professional from home! 👔

What's your video call setup?`,
    hashtags: '#videoCall #callSetup #lookProfessional #zoomSetup #meetingReady #ringLight #homeOffice #proTips #videoCallTips #remoteWork',
    imageDescription: 'Professional video call setup',
  },
  {
    day: 18,
    caption: `Tech I regret buying vs. tech I love:

Regret ❌:
- Cheap keyboard (broke fast)
- Gimmicky gadgets

Love ✅:
- Quality [product]
- Reliable [product]

Buy once, buy right!`,
    hashtags: '#techRegrets #techLove #buyOnce #qualityMatters #techReview #honestOpinion #techMistakes #learnFromMe #smartBuying #techAdvice',
    imageDescription: 'Tech regrets vs loves comparison',
  },
  {
    day: 19,
    caption: `Saturday setup organizing! 

Taking time to:
🔌 Manage cables
🧹 Clean desk
📦 Organize drawers

Clean space = clear mind!

Who else is doing some weekend organizing?`,
    hashtags: '#saturdayOrganizing #cleanDesk #cableManagement #weekendProject #organizedLife #cleanSpace #deskClean #weekendVibes #setupMaintenance #tidyDesk',
    imageDescription: 'Weekend desk organizing session',
  },
  {
    day: 20,
    caption: `20 days of tech tips and setup talk!

Most asked question this month:
"What's the ONE thing you'd recommend?"

My answer: Whatever solves your BIGGEST problem.

For me, it was [product].

What's yours?`,
    hashtags: '#20days #topQuestion #techRecommendation #solveProblems #bestAdvice #oneProduct #techTips #setupAdvice #recommendation #biggestProblem',
    imageDescription: '20 day milestone and top question',
  },
  {
    day: 21,
    caption: `3 weeks of setup content! Here's what I've learned:

1. Everyone's needs are different
2. Price doesn't always = quality
3. Small upgrades make big differences
4. Your setup should serve YOU

Thanks for being here! 🙏`,
    hashtags: '#3weeks #lessonsLearned #setupJourney #techLessons #thankYou #community #techWisdom #reflections #personalizedSetup #qualityMatters',
    imageDescription: 'Three week learning reflections',
  },
  {
    day: 22,
    caption: `Monday productivity hack:

Start the week with a 5-minute setup check:

✅ Desk clear?
✅ Tech charged?
✅ Tools ready?

5 minutes = smoother entire week!`,
    hashtags: '#mondayProductivity #weekStart #setupCheck #5minutes #productivityHack #organizedMonday #weeklyPrep #techReady #smoothWeek #mondayTip',
    imageDescription: 'Monday setup check routine',
  },
  {
    day: 23,
    caption: `Hot take: Your chair matters more than your monitor.

You can look away from your screen.
You can't sit away from your chair.

Invest in comfort first!

Agree? 🤔`,
    hashtags: '#hotTake #chairMatters #ergonomics #comfortFirst #setupPriority #chairInvestment #techOpinion #officeChair #healthFirst #seatingMatters',
    imageDescription: 'Chair importance hot take',
  },
  {
    day: 24,
    caption: `The tech rabbit hole is real 😂

Me: "I just need one cable"
Also me: *3 hours later* "I need a whole new setup"

Anyone else relate?

What's your latest tech rabbit hole?`,
    hashtags: '#techRabbitHole #relatable #techShopping #oneMoreThing #techAddiction #shoppingSpree #techHumor #whoCanRelate #endlessShopping #techLife',
    imageDescription: 'Relatable tech shopping humor',
  },
  {
    day: 25,
    caption: `5 days left! 

Quick wins you can do TODAY:

1. Clean your screen
2. Organize one drawer
3. Adjust chair height
4. Clear desktop files

Small actions = big impact!`,
    hashtags: '#5daysLeft #quickWins #todayActions #smallSteps #bigImpact #setupTips #easyFixes #doItToday #productivityWins #simpleChanges',
    imageDescription: 'Quick win action items',
  },
  {
    day: 26,
    caption: `Favorite tech discovery this month:

[Product name]

Didn't know I needed it.
Now can't imagine working without it.

Ever had that experience with a product?`,
    hashtags: '#techDiscovery #favoriteProduct #monthlyFind #cantLiveWithout #techFind #newFavorite #productLove #unexpectedFind #techGem #discovery',
    imageDescription: 'Monthly tech discovery feature',
  },
  {
    day: 27,
    caption: `Setup philosophy I live by:

"Does this make my work easier or harder?"

If harder: Remove it.
If easier: Keep it.

Simple filter for a simple, effective setup!`,
    hashtags: '#setupPhilosophy #simpleSetup #effective #lessIsMore #purposefulTech #setupMindset #intentional #techPhilosophy #workSmarter #simplicity',
    imageDescription: 'Setup philosophy and mindset',
  },
  {
    day: 28,
    caption: `Almost at day 30!

Your setup challenge for the weekend:

Change ONE thing about your workspace.

Could be:
→ Move your monitor
→ Add a plant
→ Change lighting

Small change, fresh perspective!`,
    hashtags: '#weekendChallenge #setupChange #oneChange #freshPerspective #weekendProject #trySomethingNew #smallChange #workspaceRefresh #setupChallenge #almost30',
    imageDescription: 'Weekend setup challenge',
  },
  {
    day: 29,
    caption: `Tomorrow is day 30!

Reflecting on this journey...

I hope you found at least ONE tip that helped your setup.

That's all it takes - one improvement at a time.

What was YOUR favorite tip? 👇`,
    hashtags: '#day29 #reflection #oneTip #helpfulContent #setupJourney #thankYou #improvement #favoritetip #almostThere #gratitude',
    imageDescription: 'Day 29 reflection and gratitude',
  },
  {
    day: 30,
    caption: `DAY 30! 🎉

30 days of tech tips, setup ideas, and productivity hacks!

Whether you made one change or ten, you're moving in the right direction.

Your setup journey never really ends - it evolves.

Here's to your best setup yet! 🚀`,
    hashtags: '#day30 #complete #techJourney #setupEvolution #celebration #thankyou #keepImproving #bestSetup #techCommunity #journeyContinues',
    imageDescription: 'Day 30 celebration finale',
  },
];

// BEAUTY PACK - 30 Days of Posts
const beautyPosts: DayContent[] = [
  {
    day: 1,
    caption: `Found THE product everyone's been talking about 💄

And yes... the hype is REAL.

My skin has never looked better!

Link in bio to see what it is 👆`,
    hashtags: '#skincare #beautyfind #hypenReal #glowingskin #beautytips #skincareRoutine #beautysecret #musthave #beautyreview #skincareLove',
    imageDescription: 'Glowing skin beauty product showcase',
  },
  {
    day: 2,
    caption: `Morning skincare routine! ☀️

Step 1: Cleanse
Step 2: Tone
Step 3: [Product]
Step 4: Moisturize
Step 5: SPF

Takes 5 minutes, changes everything!

What's YOUR morning routine?`,
    hashtags: '#morningRoutine #skincareRoutine #skincare101 #dailySkincare #routineShare #skincareSteps #morningskincare #5minuteRoutine #glowUp #skincareTips',
    imageDescription: 'Morning skincare routine steps',
  },
  {
    day: 3,
    caption: `Can we talk about HOW GOOD my skin looks after using [product]? 😍

Before: Dull, tired
After: Glowing, healthy

I'm officially obsessed.

Has a product ever completely changed your skin?`,
    hashtags: '#beforeAfter #skinTransformation #glowingSkin #obsessed #skincareResults #beautyWin #skincareLove #realResults #beautyJourney #skinChange',
    imageDescription: 'Before and after skin transformation',
  },
  {
    day: 4,
    caption: `Budget beauty secret 💰

You don't need a 20-step routine.
You don't need $500 products.

You need the RIGHT products for YOUR skin.

Quality over quantity, always!

What's your budget beauty secret?`,
    hashtags: '#budgetBeauty #skincareonabudget #qualityOverQuantity #beautysecrets #affordableBeauty #smartSkincare #beautyTips #skincarewisdom #lessIsMore #righProducts',
    imageDescription: 'Budget friendly beauty tips',
  },
  {
    day: 5,
    caption: `Friday night self-care! 🛁

Tonight's menu:
🧖‍♀️ Face mask
💆‍♀️ Hair treatment
🧴 Full body moisturize
🕯️ Candles

Because you deserve it!

What's your self-care Friday look like?`,
    hashtags: '#selfCareFriday #fridayNight #selfCareSunday #pamperTime #treatYourself #selfLove #selfCareRoutine #relaxation #beautyNight #youDeserveIt',
    imageDescription: 'Cozy self care Friday night',
  },
  {
    day: 6,
    caption: `The product that replaced 3 others in my routine:

[Product name]

Simplify your skincare!

Less products = less confusion = better results

Anyone else team minimal skincare?`,
    hashtags: '#minimalskincare #simplify #oneProductWonder #lessIsMore #skincareSimplified #multiTasker #beautyHack #simpleRoutine #skincareMinimalist #effective',
    imageDescription: 'Minimalist skincare product feature',
  },
  {
    day: 7,
    caption: `One week skincare check-in! ✨

How's your skin feeling?

Mine is:
→ More hydrated
→ Less breakouts
→ Actually glowing??

Consistency is everything!`,
    hashtags: '#oneWeek #skincareCheckin #consistency #hydration #glowingSkin #skinProgress #weeklyUpdate #skincareJourney #skincareDiary #results',
    imageDescription: 'Week one skincare progress',
  },
  {
    day: 8,
    caption: `Skincare myth busted:

"Expensive = Better"

WRONG! ❌

Some of my favorite products are under $30.

It's about ingredients, not price tags!

What's your best affordable find?`,
    hashtags: '#mythBusted #affordableSkincare #under30 #ingredients #beautyMYths #skincareTruth #budgetFriendly #smartBeauty #drugStorefinds #qualityAffordable',
    imageDescription: 'Affordable skincare myth busting',
  },
  {
    day: 9,
    caption: `The ONE product I'll never skip:

SPF! ☀️

I don't care if it's cloudy.
I don't care if I'm inside.

Sun protection = anti-aging + health.

Are you team SPF every day?`,
    hashtags: '#SPF #sunscreen #sunProtection #antiaging #skinHealth #dailySPF #protectYourSkin #skincareMustHave #neverSkip #SPFeveryday',
    imageDescription: 'Sunscreen importance emphasis',
  },
  {
    day: 10,
    caption: `10 days of better skincare! 📊

Changes I've noticed:
✨ Smoother texture
✨ Even tone
✨ Less redness
✨ More confidence!

Your skin CAN change. Give it time and the right products!`,
    hashtags: '#10days #skincareProgress #skinchanges #betterSkin #patience #rightProducts #skinImprovement #beautyJourney #skincareworks #confidence',
    imageDescription: '10 day skincare progress report',
  },
  {
    day: 11,
    caption: `Unpopular opinion: Your skincare routine doesn't need to be complicated.

Cleanser + Moisturizer + SPF

That's it. That's the base.

Everything else is bonus.

Thoughts? 👇`,
    hashtags: '#unpopularOpinion #simpleIsBest #basicSkincare #skincareBasics #minimalRoutine #lessIsMore #skincareTruth #backToBasics #simplify #essentialsOnly',
    imageDescription: 'Simple skincare basics opinion',
  },
  {
    day: 12,
    caption: `What I eat = How I glow 🥗

Skincare isn't just products!

→ Water (so much water)
→ Veggies
→ Less sugar
→ Good sleep

Inside out beauty is real!

What's your diet tip for glowing skin?`,
    hashtags: '#insideOut #dietForSkin #glowFromWithin #hydration #healthySkin #eatForGlow #beautyDiet #skincareAndDiet #holisticBeauty #waterIsLife',
    imageDescription: 'Holistic inside out beauty',
  },
  {
    day: 13,
    caption: `Product I was scared to try but LOVE:

[Product type]

Why I waited so long: Seemed too intense
Why I love it: Actually gentle and effective!

Sometimes you just have to try it!`,
    hashtags: '#triedIt #worthIt #scaredToTry #newProduct #skincareFind #beautyDiscovery #justTryIt #surprisinglyGood #overcameFear #beautyWin',
    imageDescription: 'Trying new skincare product',
  },
  {
    day: 14,
    caption: `2 weeks of consistent skincare! 🎉

Biggest lesson: Stop changing products every week!

Give things TIME to work.

Your skin needs 4-6 weeks to show real results.

Patience = glowing skin!`,
    hashtags: '#2weeks #skincareLesson #patience #consistency #giveItTime #skincareWisdom #dontGiveUp #skincareTip #waitForResults #beautylesson',
    imageDescription: 'Two week consistency lesson',
  },
  {
    day: 15,
    caption: `Halfway through the month!

Skincare wins so far:
✅ More consistent routine
✅ Learning my skin type
✅ Finding products that work
✅ Actually seeing results!

How's YOUR skincare going?`,
    hashtags: '#halfwayThere #skincareWins #progress #skintype #workingProducts #results #skincareJourney #midMonth #celebrateWins #skincareprogress',
    imageDescription: 'Halfway skincare celebration',
  },
  {
    day: 16,
    caption: `Night routine vs morning routine:

Morning: Light, protective ☀️
Night: Rich, restorative 🌙

Your skin works differently at different times!

Match your routine to the time of day!`,
    hashtags: '#nightRoutine #morningVsNight #skincareScience #skinAtNight #circadianSkincare #routineTips #AMvsPM #skincareSchedule #smartSkincare #skinCycles',
    imageDescription: 'Morning vs night routine comparison',
  },
  {
    day: 17,
    caption: `The product that surprised me most:

Expected: Meh, it's probably overhyped
Reality: Holy glow, where have you been?? ✨

[Product] exceeded ALL expectations!

Ever been pleasantly surprised by a product?`,
    hashtags: '#productSurprise #exceeded #holyGlow #unexpected #beautyFind #skincareWin #pleasantlySurprised #worthTheHype #beautyDiscovery #loveIt',
    imageDescription: 'Surprising beauty product reveal',
  },
  {
    day: 18,
    caption: `Skincare confession: I don't have perfect skin 😅

I still get breakouts.
I still have texture.
I still have "bad skin days."

And that's OKAY!

Progress, not perfection! ❤️`,
    hashtags: '#skincareConfession #notPerfect #realSkin #breakouts #itsOkay #progressNotPerfection #realTalk #skincareReality #normalSkin #selfAcceptance',
    imageDescription: 'Real skin confession and acceptance',
  },
  {
    day: 19,
    caption: `Weekend reset for skin! 🧖‍♀️

Saturday plan:
→ Deep cleanse
→ Exfoliate (gently!)
→ Mask time
→ Extra hydration

Your skin will thank you Monday!

What's your weekend skin ritual?`,
    hashtags: '#weekendReset #saturdaySkincare #deepCleanse #maskTime #skinRitual #weekendBeauty #pamperDay #skincareWeekend #selfCareSaturday #skinTLC',
    imageDescription: 'Weekend skin reset ritual',
  },
  {
    day: 20,
    caption: `20 days of skincare content! 💕

Most asked questions:
1. "What's your skin type?" - Combo
2. "Favorite product?" - [Product]
3. "How long to see results?" - 4-6 weeks

Any other questions? Ask below! 👇`,
    hashtags: '#20days #FAQ #skincareQuestions #askMe #skinType #favoriteProduct #timeline #QandA #skincareHelp #communityChat',
    imageDescription: '20 day FAQ roundup',
  },
  {
    day: 21,
    caption: `3 weeks of better skincare habits!

Non-negotiables I've built:
🌅 Morning SPF
🌙 Night time cleanse
💧 Hydration always

Small habits = big glow!

What's YOUR non-negotiable?`,
    hashtags: '#3weeks #skincareHabits #nonNegotiable #buildHabits #SPF #cleanse #hydration #smallHabits #bigResults #habitStacking',
    imageDescription: 'Three week habit building',
  },
  {
    day: 22,
    caption: `Monday skincare motivation:

Your skin is an investment.

What you do today shows up in 5 years.

Consistency NOW = gorgeous skin LATER!

Let's start this week strong! 💪`,
    hashtags: '#mondayMotivation #skinInvestment #futureYou #consistencyIsKey #longTermBeauty #skincareMotivation #startStrong #mondaySkincare #beautyGoals #investInSkin',
    imageDescription: 'Monday skincare motivation',
  },
  {
    day: 23,
    caption: `Ingredient I'm currently obsessed with:

[Ingredient name]

Why: [Benefit]
How I use it: [Product type]
When: [Time of day]

Knowledge is glow power! ✨`,
    hashtags: '#ingredientSpotlight #skincareIngredients #beautyEducation #learnSkincare #knowledgeIsPower #ingredientLove #skincareNerd #beautyScience #smartSkincare #educateYourself',
    imageDescription: 'Ingredient spotlight education',
  },
  {
    day: 24,
    caption: `Real talk: You don't need every viral product.

Some viral products: Actually amazing
Some viral products: Just good marketing

Trust reviews from real people, not just hype!

What viral product actually worked for you?`,
    hashtags: '#realTalk #viralProduct #hyepVsReality #trustReviews #smartShopping #beautyTruth #notEveryTrend #honestBeauty #skipTheHype #whatActuallyWorks',
    imageDescription: 'Viral product real talk',
  },
  {
    day: 25,
    caption: `5 days left in our skincare journey! 

Quick reminder:
→ Drink water
→ Get sleep  
→ Be gentle with your skin
→ Be patient with results

You're doing amazing! ✨`,
    hashtags: '#5daysLeft #reminder #drinkWater #getSleep #beGentle #bePatient #youreDoingAmazing #skincareReminder #selfCare #almostThere',
    imageDescription: 'Five day reminder and encouragement',
  },
  {
    day: 26,
    caption: `Products I'll repurchase vs won't:

Will repurchase ✅:
- [Product] - Holy grail!
- [Product] - Worth every penny

Won't repurchase ❌:
- [Product type] - Meh results

Honesty helps everyone shop smarter!`,
    hashtags: '#repurchase #holyGrail #worthIt #honestReview #skipIt #beautyReviews #smartShopping #beautyHonesty #whatToBuy #realReviews',
    imageDescription: 'Repurchase vs skip honest review',
  },
  {
    day: 27,
    caption: `Skincare truth bomb:

The BEST skincare routine is one you'll actually DO.

A perfect 10-step routine you skip?
Useless.

A simple 3-step routine you do daily?
POWERFUL.

Keep it simple, keep it consistent!`,
    hashtags: '#truthBomb #realityCheck #simpleWins #consistency #actuallyDoIt #skincareRealTalk #lessIsMore #dailyRoutine #powerfulSimple #beautywisdom',
    imageDescription: 'Skincare truth bomb reality',
  },
  {
    day: 28,
    caption: `Almost at day 30!

Your homework for the weekend:
1. Use up samples you've been hoarding
2. Organize your skincare area
3. Throw out expired products

Fresh start for next month! 🌟`,
    hashtags: '#weekendHomework #organizedBeauty #useItUp #declutter #expiredProducts #freshStart #skincareOrganization #beautycleanout #newMonth #organizeLife',
    imageDescription: 'Weekend skincare organization',
  },
  {
    day: 29,
    caption: `Tomorrow is day 30! 🎉

Before we wrap up, I want to know:

What's the ONE skincare change you made this month?

Even tiny changes count!

Share below - let's celebrate together! 👇`,
    hashtags: '#day29 #almostThere #oneChange #celebrateTogether #skincareWins #shareyourstory #community #skincarejourney #tinyChanges #celebrateProgress',
    imageDescription: 'Day 29 community sharing',
  },
  {
    day: 30,
    caption: `DAY 30! WE DID IT! 🎉✨💕

30 days of skincare love!

Remember:
→ Consistency over perfection
→ Your skin is unique
→ Small changes add up
→ You're beautiful at every stage

Thank you for being here!

Here's to glowing skin and self-love! 💖`,
    hashtags: '#day30 #weDidIt #skincareLove #thankyou #glowingSkin #selfLove #beautifulYou #journeyComplete #celebrateYou #skincareForever',
    imageDescription: 'Day 30 celebration and gratitude',
  },
];

// Export all profit packs with real content
export const profitPacks: ProfitPack[] = [
  {
    id: 'fitness-pack',
    name: 'Fitness Empire Pack',
    niche: 'Health & Fitness',
    emoji: '💪',
    value: '$497',
    commission: '$150 - $500/month',
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    posts: fitnessPosts,
  },
  {
    id: 'kitchen-pack',
    name: 'Kitchen Cash Pack',
    niche: 'Home & Kitchen',
    emoji: '🍳',
    value: '$497',
    commission: '$120 - $400/month',
    color: 'from-orange-500 to-yellow-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    posts: kitchenPosts,
  },
  {
    id: 'tech-pack',
    name: 'Tech Profits Pack',
    niche: 'Electronics',
    emoji: '📱',
    value: '$497',
    commission: '$200 - $800/month',
    color: 'from-blue-500 to-purple-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    posts: techPosts,
  },
  {
    id: 'beauty-pack',
    name: 'Beauty Boss Pack',
    niche: 'Beauty & Skincare',
    emoji: '💄',
    value: '$497',
    commission: '$100 - $350/month',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    posts: beautyPosts,
  },
];

// High Ticket Products with real data
export const highTicketProducts: HighTicketProduct[] = [
  {
    id: 'ht-1',
    title: 'NordicTrack Commercial Treadmill with iFit',
    price: '$1,799',
    commission: '$108 - $180',
    rating: 4.6,
    reviews: 3247,
    category: 'Fitness',
    isHot: true,
    asin: 'B08L5TGHN8',
    bulletPoints: [
      '22" HD touchscreen display',
      'iFit interactive training included',
      '-3% to 15% incline range',
      'Cushioned deck technology',
    ],
  },
  {
    id: 'ht-2',
    title: 'LG C3 65" OLED Smart TV 4K',
    price: '$1,496',
    commission: '$90 - $150',
    rating: 4.8,
    reviews: 5821,
    category: 'Electronics',
    isHot: true,
    asin: 'B0BVXF72HQ',
    bulletPoints: [
      'Perfect blacks with OLED technology',
      'a9 Gen6 AI Processor 4K',
      'Dolby Vision & Atmos support',
      'Gaming features with 120Hz',
    ],
  },
  {
    id: 'ht-3',
    title: 'Breville Barista Touch Espresso Machine',
    price: '$999',
    commission: '$60 - $100',
    rating: 4.7,
    reviews: 2156,
    category: 'Kitchen',
    isHot: false,
    asin: 'B078RQVQF1',
    bulletPoints: [
      'Intuitive touch screen display',
      'Automatic milk texturing',
      'Built-in grinder with 30 settings',
      'Café quality espresso at home',
    ],
  },
  {
    id: 'ht-4',
    title: 'Real Relax Full Body Massage Chair',
    price: '$1,599',
    commission: '$96 - $160',
    rating: 4.4,
    reviews: 4532,
    category: 'Wellness',
    isHot: true,
    asin: 'B07H4LHZJJ',
    bulletPoints: [
      'Zero gravity recline position',
      'Full body air massage system',
      'Built-in Bluetooth speakers',
      'Heat therapy in lumbar area',
    ],
  },
  {
    id: 'ht-5',
    title: 'Uplift V2 Standing Desk with Bamboo Top',
    price: '$799',
    commission: '$48 - $80',
    rating: 4.8,
    reviews: 3891,
    category: 'Office',
    isHot: false,
    asin: 'B07D7DBFJW',
    bulletPoints: [
      'Electric height adjustment',
      'Memory preset positions',
      'Sustainable bamboo desktop',
      'Industry-leading warranty',
    ],
  },
  {
    id: 'ht-6',
    title: 'Dyson Purifier Hot+Cool HP07',
    price: '$749',
    commission: '$45 - $75',
    rating: 4.5,
    reviews: 2847,
    category: 'Home',
    isHot: false,
    asin: 'B09BN7YRMX',
    bulletPoints: [
      'HEPA H13 air purification',
      'Heating and cooling modes',
      'Alexa and app compatible',
      'Captures 99.97% particles',
    ],
  },
  {
    id: 'ht-7',
    title: 'Peloton Bike+ with Premium Package',
    price: '$2,495',
    commission: '$150 - $250',
    rating: 4.8,
    reviews: 8923,
    category: 'Fitness',
    isHot: true,
    asin: 'B08GKHB3TQ',
    bulletPoints: [
      '24" rotating HD touchscreen',
      'Auto-follow resistance',
      'Apple GymKit compatible',
      'Premium sound system',
    ],
  },
  {
    id: 'ht-8',
    title: 'Samsung 75" Neo QLED 4K Smart TV',
    price: '$1,997',
    commission: '$120 - $200',
    rating: 4.7,
    reviews: 3456,
    category: 'Electronics',
    isHot: true,
    asin: 'B0BV3FL5JC',
    bulletPoints: [
      'Quantum Matrix Technology',
      'Neural Quantum Processor',
      'Object Tracking Sound+',
      'Gaming Hub built-in',
    ],
  },
];
