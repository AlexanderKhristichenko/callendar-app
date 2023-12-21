import { Timeline } from "./Timeline";
import { EVENT_HEIGHT_MULTIPLIER, EVENT_TOP_MULTIPLIER } from "./constants";
import { data } from "./data";

export const Events = () => {
  const categorizeEvents = (events) => {
    const categories = {
      type1: [],
      type2: [],
      type3: [],
      type4: [],
    };

    events.forEach((event) => {
      if (event.type === 1) {
        categories.type1.push(event);
      } else if (event.type === 2) {
        categories.type2.push(event);
      } else if (event.type === 3) {
        categories.type3.push(event);
      } else {
        categories.type4.push(event);
      }
    });

    return categories;
  };
  const categorizedEvents = categorizeEvents(data);
  const displayEvents = data.filter((event) => event.type === 1);

  return (
    <div className="left-panel">
      <Timeline />
      <div className="events">
        {Object.keys(categorizedEvents).map((category) => (
          <div key={category} className={`event-category event-${category}`}>
            {categorizedEvents[category].map((event) => (
              <div
                key={event.id}
                className={`event ${
                  displayEvents.includes(event) ? "display-event" : "hover"
                }  event-${category}`}
                style={{
                  height: `${
                    (event.duration / 60) * EVENT_HEIGHT_MULTIPLIER
                  }px`,
                  top: `${
                    (new Date(event.startDateTime).getHours() +
                      new Date(event.startDateTime).getMinutes() / 60) *
                      EVENT_TOP_MULTIPLIER +
                    7
                  }px`,
                }}>
                <div className="event-time">
                  {displayEvents.includes(event) ? (
                    <p className="event-title">{event.title}</p>
                  ) : null}

                  {displayEvents.includes(event) ? (
                    `
                    ${new Date(event.startDateTime).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })} - ${new Date(
                      new Date(event.startDateTime).getTime() +
                        event.duration * 60 * 1000,
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })} `
                  ) : (
                    <div className="event-info">
                      <h4 className="event-title">{event.title}</h4>
                      {new Date(event.startDateTime).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}{" "}
                      -{" "}
                      {new Date(
                        new Date(event.startDateTime).getTime() +
                          event.duration * 60 * 1000,
                      ).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
