exports.run = (client, message) => {
    const mentioned = message.mentions.users.first();

    if (!mentioned) {
        message.edit(`:middle_finger:         :persevere:\n  :bug::zzz::broken_heart::bug:\n                 :fuelpump:   :boot:\n                :zap:️8=:punch:=D\n           :guitar: :wrench:\n         :boot:       :boot:`).then(n => {
            n.edit(`:middle_finger:         :confounded:\n  :bug::zzz::broken_heart::bug:\n                 :fuelpump:  :boot:\n                :zap:️8:punch:==D\n           :guitar: :wrench:\n         :boot:       :boot:`).then(n => {
                n.edit(`:middle_finger:         :tired_face:\n  :bug::zzz::broken_heart::bug:\n                 :fuelpump:   :boot:\n                :zap:️8=:punch:=D\n           :guitar: :wrench:\n         :boot:       :boot:`).then(n => {
                    n.edit(`:middle_finger:         :confounded:\n  :bug::zzz::broken_heart::bug:\n                 :fuelpump:   :boot:\n                :zap:️8==:punch:D\n           :guitar: :wrench:\n         :boot:       :boot:`).then(n => {
                        n.edit(`:middle_finger:         :tired_face:\n  :bug::zzz::broken_heart::bug:\n                 :fuelpump:   :boot:\n                :zap:️8=:punch:=D\n           :guitar: :wrench:\n         :boot:       :boot:`).then(n => {
                            n.edit(`:middle_finger:         :tired_face:\n  :bug::zzz::broken_heart::bug:\n                 :fuelpump:  :boot:\n                :zap:️8:punch:==D\n           :guitar: :wrench:\n         :boot:       :boot:`).then(n => {
                                n.edit(`:middle_finger:         :drooling_face:\n  :bug::zzz::broken_heart::bug:\n                 :fuelpump:   :boot:\n                :zap:️8=:punch:=D:sweat_drops:\n           :guitar: :wrench:\n         :boot:       :boot:`).then(n => {
                                    n.edit(`:middle_finger:         :drooling_face:\n  :bug::zzz::broken_heart::bug:\n                 :fuelpump:    :boot:\n                :zap:️8==:punch:D:sweat_drops:\n           :guitar: :wrench:                 :sweat_drops:\n         :boot:       :boot:`)
                                });
                            });
                        });
                    });
                });
            });
        });
    } else {
        message.edit(`:middle_finger:         :persevere:\n  :bug::zzz::broken_heart::bug:\n                 :fuelpump:   :boot:\n                :zap:️8=:punch:=D\n           :guitar: :wrench:\n         :boot:       :boot:          ${mentioned}`).then(n => {
            n.edit(`:middle_finger:         :confounded:\n  :bug::zzz::broken_heart::bug:\n                 :fuelpump:  :boot:\n                :zap:️8:punch:==D\n           :guitar: :wrench:\n         :boot:       :boot:          ${mentioned}`).then(n => {
                n.edit(`:middle_finger:         :tired_face:\n  :bug::zzz::broken_heart::bug:\n                 :fuelpump:   :boot:\n                :zap:️8=:punch:=D\n           :guitar: :wrench:\n         :boot:       :boot:          ${mentioned}`).then(n => {
                    n.edit(`:middle_finger:         :confounded:\n  :bug::zzz::broken_heart::bug:\n                 :fuelpump:   :boot:\n                :zap:️8==:punch:D\n           :guitar: :wrench:\n         :boot:       :boot:          ${mentioned}`).then(n => {
                        n.edit(`:middle_finger:         :tired_face:\n  :bug::zzz::broken_heart::bug:\n                 :fuelpump:   :boot:\n                :zap:️8=:punch:=D\n           :guitar: :wrench:\n         :boot:       :boot:          ${mentioned}`).then(n => {
                            n.edit(`:middle_finger:         :tired_face:\n  :bug::zzz::broken_heart::bug:\n                 :fuelpump:  :boot:\n                :zap:️8:punch:==D\n           :guitar: :wrench:\n         :boot:       :boot:          ${mentioned}`).then(n => {
                                n.edit(`:middle_finger:         :drooling_face:\n  :bug::zzz::broken_heart::bug:\n                 :fuelpump:   :boot:\n                :zap:️8=:punch:=D:sweat_drops:\n           :guitar: :wrench:\n         :boot:       :boot:          ${mentioned}`).then(n => {
                                    n.edit(`:middle_finger:         :drooling_face:\n  :bug::zzz::broken_heart::bug:\n                 :fuelpump:    :boot:\n                :zap:️8==:punch:D:sweat_drops:\n           :guitar: :wrench:                 :sweat_drops:\n         :boot:       :boot:          ${mentioned}`)
                                });
                            });
                        });
                    });
                });
            });
        });
    }
}
