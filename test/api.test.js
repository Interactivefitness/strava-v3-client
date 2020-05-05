const strava = require("../index");

describe("fetching swagger spec", () => {
  it("should return successful", () => {
    return strava
      .then(client => {
        expect(client.spec).toMatchSnapshot({
          swagger: "2.0",
          basePath: "/api/v3",
          host: "www.strava.com",
          info: expect.objectContaining({
            title: "Strava API v3",
            version: "3.0.0",
          }),
          securityDefinitions: expect.objectContaining({
            strava_oauth: expect.anything()
          })
        });
        expect(client.errors).toEqual(expect.arrayContaining([]));
      });
  });
});

describe("Activities", () => {
  let client;
  let firstActivityId;

  beforeAll(async() => {
    client = await strava;
  });

  describe("#getLoggedInAthleteActivities()", () => {
    it("should return successful", () => {
       expect(client.errors).toEqual(expect.arrayContaining([]));
      return client.apis.Activities.getLoggedInAthleteActivities()
      .then(response => response.body)
      .then(json => {
         firstActivityId = json[0].id;
      });
    });
  });
  describe("#createActivity()", () => {
  });
  describe("#getActivityById()", () => {
  });
  describe("#getCommentsByActivityId()", () => {
  });
  describe("#getKudoersByActivityId()", () => {
  });
  describe("#getLapsByActivityId()", () => {
  });
  describe("#getZonesByActivityId()", () => {
  });
  describe("#updateActivityById()", () => {
  });
});

describe("Athletes", () => {
  let client;
  let athleteId;
  beforeAll(async() => {
    client = await strava;
  });

  describe("#getLoggedInAthlete()", () => {
    it("should return successful", () => {
      expect(client.errors).toEqual(expect.arrayContaining([]));
      return client.apis.Athletes.getLoggedInAthlete()
      .then(response => response.body)
      .then(json => {
        athleteId = json.id;
        expect(json).toHaveProperty('id', athleteId)
        expect(json).toHaveProperty('username', expect.any(String))
        expect(json).toHaveProperty('firstname', expect.any(String))
        expect(json).toHaveProperty('lastname', expect.any(String))
        expect(json).toHaveProperty('profile_medium', expect.any(String))
        expect(json).toHaveProperty('profile', expect.any(String))
        expect(json).toHaveProperty('city', expect.any(String))
        expect(json).toHaveProperty('state', expect.any(String))
        expect(json).toHaveProperty('country', expect.any(String))
        expect(json).toHaveProperty('premium', expect.any(Boolean))
        expect(json).toHaveProperty('summit', expect.any(Boolean))
        expect(json).toHaveProperty('created_at', expect.any(String))
        expect(json).toHaveProperty('updated_at', expect.any(String))
        expect(json).toHaveProperty('badge_type_id', expect.any(Number))
        expect(json).toHaveProperty('resource_state', expect.any(Number))
      });
    });
  });
  describe("#getLoggedInAthleteZones()", () => {
    it("should return successful", () => {
      return client.apis.Athletes.getLoggedInAthleteZones()
      .then(response => response.body)
      .then(json => {
        expect(json).toHaveProperty('heart_rate', expect.anything())
//        expect(json).toHaveProperty('power', expect.anything())
      });
    });
  });
  describe("#getStats()", () => {
    it("should return successful", () => {
      return client.apis.Athletes.getStats({ id: athleteId })
      .then(response => response.body)
      .then(json => {
        expect(json).toHaveProperty('all_run_totals', expect.anything())
        expect(json).toHaveProperty('all_swim_totals', expect.anything())
        expect(json).toHaveProperty('all_ride_totals', expect.anything())
      });
    });
  });
  describe("#updateLoggedInAthlete()", () => {
    it("should return successful", () => {
      return client.apis.Athletes.updateLoggedInAthlete({ weight: 77.1107 })
      .then(response => response.body)
      .then(json => {
        expect(json).toHaveProperty('id', athleteId)
      });
    });
  });
});

describe("Clubs", () => {
  let client;
  let firstClubId;
  beforeAll(async() => {
    client = await strava;
  });

  describe("#getLoggedInAthleteClubs()", () => {
    it("should return successful", () => {
      return client.apis.Clubs.getLoggedInAthleteClubs()
        .then(response => response.body)
        .then(json => {
           firstClubId = json[0].id;
         });
     });
  });
  describe("#getClubActivitiesById()", () => {
  });
  describe("#getClubAdminsById()", () => {
  });
  describe("#getClubById()", () => {
  });
  describe("#getClubMembersById()", () => {
  });
});

describe("Gears", () => {
  let client;
  beforeAll(async() => {
    client = await strava;
  });

  describe("#getGearById()", () => {
  });
});

describe("Routes", () => {
  let client;
  beforeAll(async() => {
    client = await strava;
  });

  describe("#getRoutesByAthleteId()", () => {
  });
  describe("#getRouteById()", () => {
  });
  describe("#getRouteAsGPX()", () => {
  });
  describe("#getRouteAsTCX()", () => {
  });
});

describe("RunningRaces", () => {
  let client;
  beforeAll(async() => {
    client = await strava;
  });

  describe("#getRunningRaceById()", () => {
  });
  describe("#getRunningRaces()", () => {
  });
});

describe("SegmentEfforts", () => {
  let client;
  beforeAll(async() => {
    client = await strava;
  });

  describe("#getEffortsBySegmentId()", () => {
  });
  describe("#getSegmentEffortById()", () => {
  });
});

describe("Segments", () => {
  let client;
  beforeAll(async() => {
    client = await strava;
  });

  describe("#exploreSegments()", () => {
  });
  describe("#getLeaderboardBySegmentId()", () => {
  });
  describe("#getLoggedInAthleteStarredSegments()", () => {
  });
  describe("#getSegmentById()", () => {
  });
  describe("#starSegment()", () => {
  });
});

describe("Streams", () => {
  let client;
  beforeAll(async() => {
    client = await strava;
  });

  describe("#getActivityStreams()", () => {
  });
  describe("#getRouteStreams()", () => {
  });
  describe("#getSegmentEffortStreams()", () => {
  });
  describe("#getSegmentStreams()", () => {
  });
});

describe("Uploads", () => {
  let client;
  beforeAll(async() => {
    client = await strava;
  });

  describe("#createUpload()", () => {
  });
  describe("#getUploadById()", () => {
  });
});

