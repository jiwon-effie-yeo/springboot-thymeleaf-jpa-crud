package boot.jpa.crud.domain.hero;


import boot.jpa.crud.domain.BaseTimeEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Hero extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 20)
    private String name;

    @Column
    private int age;

    @Column(columnDefinition = "TEXT")
    private String memo;

    @Builder
    public Hero(Long id, String name, int age, String memo) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.memo = memo;
    }
}

