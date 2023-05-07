class Channel {
    constructor(channelID, gaugeID, alternateWidgetID) {
        this.channelID = channelID;
        this.gaugeID = gaugeID;
        this.alternateWidgetID = alternateWidgetID;
    }
}

export const channels = {
    "tyrepressure": new Channel(2117208, 643506, 643507),
    "temperature": new Channel(2117963, 643529, 643510),
    "airbag": new Channel(2117973, 643523, 643524),
    "oilsystem": new Channel(2117975, 643526, 643527)
}