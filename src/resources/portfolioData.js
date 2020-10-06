import schmedditImg from '../resources/schmeddit.gif';
import punchrImg from '../resources/punchr.png';
import arrowJournalImg from '../resources/arrow_journal.png';
import theBoardImg from '../resources/the_board.png';

const projects = [
  {
    projects: [
      {
        title: 'The Board',
        shortDescription: '“The Board” is an application for dispatchers at courier companies to manage couriers, clients and deliveries in real-time.',
        longDescription: `
          <h4>Inspiration</h4>
            <p>
              The Board was originally built as Michelle's final project for Flatiron School's SWE science fair. With her background in the courier industry, she was able to approach the use-case of this application at a detailed level. This application is still in development, with lots of new features, optimization, and debugging in the works. If you run a courier company and are interested in adapting this application for real-world use, please reach out via the contact page.
            </p>
          <h4>Use Case</h4>
            <p>
              The Board is built with the boutique courier service in mind, rather than larger app-based companies. These companies may only run a few dozen couriers at most, but their clients expect a much more hands-on, personal experience as a result. A dispatcher will take orders as a delivery request from a client, create a ticket for that delivery, then dispatch it to a courier to complete the order. Once the order is delivered, the courier will report back to the dispatcher with the point-of-delivery, or “POD,” and the time it was delivered at. The dispatcher will then mark the ticket “complete” with this information.
            </p>
            <p>
              The Board also features the ability to generate invoices for a given client and date range, which will list every ticket in that date range, allow for adjustments, and for it to be mark ‘paid’ once the client has paid.
            </p>
            <p>
              Everything is interlinked, so clicking a ticket number in an invoice will load a ticket show page, clicking a courier’s name will load their show page, viewing all tickets by that courier will load search results, each of which ticket can be linked to its relational models, edited, deleted, etc.
            </p>
          <h4>Technical information</h4>
            <p>
              The ORM is set up as a one-to-many model - couriers and clients have many tickets and each ticket belongs to a courier and a client. The ticket-to relationships are optional, as a ticket can be ordered by a ‘guest account,’ or can be ‘unassigned’.
            </p>
            <p>
              The back-end is built with Ruby on Rails and the front-end is a React application. Styling is handled mostly through React-Bootstrap, with some custom CSS worked in.
            </p>
            <h6>Please see the <a href='https://github.com/mishyjari/TheBoardClient/blob/master/README.md'>README</a> for a more detailed descrioption.</h6>
            `,
        id: 1,
        imgUrl: theBoardImg,
        github: 'https://www.github.com/mishyjari',
        videoDemo: 'https://www.youtube.com/watch?v=74Se022lc78',
        liveDemo: 'http://theboard.mishyjari.com'

      },
      {
        title: 'Punchr',
        shortDescription: 'Punchr is a web application built as a simple replacement for a traditional employee punch clock, allowing employees to open and close their shift using a 4-digit PIN, and for managers to access, and if necessary modify, shift histories. ',
        longDescription: `
        <h4>Using the Application</h4>
        <p>
          Punchr’s main page will render a punch form, a list of all active shifts, and a visual overview of active shifts as a graph.
        </p>
        <p>
          If a PIN is entered which matches a user, that user’s information will be rendered. If the user has an active shift, the details of that shift will also be displayed. Submitting the punch will open or close the punch as appropriate.
        </p>
        <p>
          Opening the control panel will first render a login form. Once logged in, a non-manager user will be able to view a list of all employees, view or edit their information, and view a history of their previous shifts.
        </p>
        <p>
          Managers will have the added ability to create, edit or delete users, see histories of all shifts, and edit or delete shifts.
        </p>
        <h4>Further Details</h4>
        <p>
          Punchr is built on a Rails API with a React front-end.
        </p>
        <p>
          Co-developer: <a href='https://github.com/elliott-king'>Elliott King</a>
        </p>
          `,
        id: 2,
        imgUrl: punchrImg,
        github: 'https://github.com/mishyjari/punchr-client',
        videoDemo: null,
        liveDemo: null
      },
      {
        title: 'ArrowJournal',
        shortDescription: 'Arrow journal is a personal organization system inspired by the Bullet Journal, allowing users to track events and tasks in a UI resembling that of an actual journal organizer.',
        longDescription: `
          <p>
            Upon loading, ArrowJournal will allow a user to login or create a new account. Event and Task instances are relational to each user, so a user account must exist for the journal to be used.
          </p>
          <p>
            There are several font choices available, which can be selected via the menu at the top of the page.
          </p>
          <p>
            Upon logging in, ArrowJournal will present a greeting and a list of events and tasks for today.
          </p>
          <p>
            Hovering the cursor over a task or event will render a modal on the opposite page with the details for that item, as well as the ability to edit it.
          </p>
          <p>
            Events will render blue, tasks marked ‘important’ will render red, normal tasks will render green, and completed tasks will render grey. A task’s completion status can be toggled via alt-click.
          </p>
          <p>
            Tabs at the top of the journal will allow the user to select an overview for the year, month or week. This will render all events in their respective day and month. Yearly and monthly overviews will only show tasks marked ‘important.’ All tasks and events will be rendered in the weekly overview.
          </p>
          <p>
            Arrows at the bottom of the pages will allow the user to increment or decrement the year, month or week being displayed.
          </p>
          <p>
            ArrowJournal is built with vanilla Javascript
          </p>
          <p>
            Co-developer: <a href='https://github.com/dkersten'>Daniel Kersten</a>
          </p>
`,
        id: 3,
        imgUrl: arrowJournalImg,
        github: 'https://www.github.com/mishyjari',
        videoDemo: 'https://youtu.be/Zrc0YOT8EKc',
        liveDemo: null
      },
      {
        title: 'Schmeddit',
        shortDescription: 'A Reddit clone featuring categories, up/down votes on posts, and threaded replies.',
        longDescription: `
        <p>
          Schmeddit is a Reddit clone which allows for posts to be created within a category. Posts can be upvoted, downvoted or favorited by users. This information is tracked in the sidebar, showing the most popular posts. Posts also support threaded replies. All posts are viewable publicly, but a user must first create an account and login in order to vote, post or comment.
        </p>
        <p>
          Schmeddit is built in Ruby on Rails and ERB.
        </p>
        <p>
          Co-developer: <a href='https://github.com/theluispestana'>Luis Pestana</a>
        </p>`,
        id: 4,
        imgUrl: schmedditImg,
        github: 'https://github.com/mishyjari/schmeddit',
        videoDemo: null,
        liveDemo: null
      }
    ]
  }
]

export default projects
